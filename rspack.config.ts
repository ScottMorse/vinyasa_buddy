import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import { ReactRefreshRspackPlugin } from '@rspack/plugin-react-refresh';

const isDev = process.env.NODE_ENV === 'development';

const STATIC_DIR = `${__dirname}/public`;

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['last 2 versions', '> 0.2%', 'not dead', 'Firefox ESR'];

export default defineConfig({
  devServer: {
    port: 3000,
    open: true,
    static: {
      directory: STATIC_DIR,
    },
  },
  entry: {
    main: './src/main.tsx',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.jsx'],
    tsConfig: `${__dirname}/tsconfig.json`,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    isDev ? new ReactRefreshRspackPlugin() : null,
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: STATIC_DIR,
        },
      ],
    }),
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
  experiments: {
    css: true,
  },
});
