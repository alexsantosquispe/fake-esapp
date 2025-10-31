import { useMemo, useState, type ReactNode } from 'react';
import TransactionsContext from './TransactionsContext';
import { TRANSACTIONS_MOCK } from '../store/mock';
import type { TransactionType } from '../types';

interface TransactionsProviderType {
  children: ReactNode;
}

const TransactionsProvider = ({ children }: TransactionsProviderType) => {
  const [data, setData] = useState<TransactionType[]>(TRANSACTIONS_MOCK);

  const totalAmount = useMemo(
    () => data.reduce((acc, transaction) => acc + transaction.amount, 0),
    [data]
  );

  const createTransaction = (transaction: TransactionType) => {
    setData((prev) => [transaction, ...prev]);
  };

  return (
    <TransactionsContext.Provider
      value={{ data, totalAmount, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
