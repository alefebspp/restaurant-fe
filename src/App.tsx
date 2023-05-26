import './App.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
