import './index.css';

import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { StrictMode } from 'react';
import TransactionsProvider from './context/TransactionProvider.tsx';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TransactionsProvider>
        <App />
      </TransactionsProvider>
    </BrowserRouter>
  </StrictMode>
);
