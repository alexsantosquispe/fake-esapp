import './index.css';

import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import TransactionsProvider from './context/TransactionDefProvider.tsx';
import { createRoot } from 'react-dom/client';
import queryClient from './store/services/queryClient.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TransactionsProvider>
          <App />
        </TransactionsProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
