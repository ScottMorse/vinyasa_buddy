import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import { ReactRefreshRspackPlugin } from '@rspack/plugin-react-refresh';

const isDev = process.env.NODE_ENV === 'development';

const STATIC_DIR = `${__dirname}/public`;

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['last 2 versions', '> 0.2%', 'not dead', 'Firefox ESR'];

const PUBLIC_PATH = process.env.PUBLIC_PATH || '/';

export default defineConfig({
  devServer: {
    port: 3000,
    open: true,
    static: {
      directory: STATIC_DIR,
    },
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: `${__dirname}/build`,
    publicPath: PUBLIC_PATH,
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
      templateContent: `<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    ${PUBLIC_PATH === '/' ? '' : `<base href="${PUBLIC_PATH}" />`}
		<link rel="icon" type="image/svg+xml" href="/favicon.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vinyasa Buddy</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Monoton&family=Rubik:wght@300..700&display=swap"
			rel="stylesheet"
		/>
    <style>
      :root {
        --font-heading: 'Monoton', sans-serif;
        --font-default: 'Rubik', sans-serif;
      }
    </style>

	</head>
	<body>
		<div id="root"></div>
	</body>
</html>
`,
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
