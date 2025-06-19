import { ThemeProvider } from './features/chakra/theme';
import { Layout } from './features/layout/view';

export const App = () => (
  <ThemeProvider>
    <Layout />
  </ThemeProvider>
);
