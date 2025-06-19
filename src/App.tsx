import { Suspense } from 'react';
import { ThemeProvider } from './features/chakra/theme';
import { lazyNamedImport } from './utils/lazy';

const { Layout } = lazyNamedImport(
  () => import('./features/layout/view'),
  'Layout',
);

export const App = () => (
  <ThemeProvider>
    <Layout />
  </ThemeProvider>
);
