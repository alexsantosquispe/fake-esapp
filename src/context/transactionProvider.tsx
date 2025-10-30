import { useMemo, useState, type ReactNode } from 'react';
import TransactionsContext from './transactionsContext';
import { TRANSACTIONS_MOCK } from '../store/mock';
import type { TransactionType } from '../types';

interface TransactionsProviderType {
  children: ReactNode;
}

const TransactionsProvider = ({ children }: TransactionsProviderType) => {
  const [data] = useState<TransactionType[]>(TRANSACTIONS_MOCK);

  const totalAmount = useMemo(
    () => data.reduce((acc, transaction) => acc + transaction.amount, 0),
    [data]
  );

  return (
    <TransactionsContext.Provider value={{ data, totalAmount }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
