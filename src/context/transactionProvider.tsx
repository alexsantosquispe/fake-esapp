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

  const onFilterTransactions = (
    value: string,
    column: keyof TransactionType
  ) => {
    if (!value.trim()) {
      setData(TRANSACTIONS_MOCK);
      return;
    }
    const filteredData = data.filter((item) => item[column] === value);
    setData(filteredData);
  };

  return (
    <TransactionsContext.Provider
      value={{ data, totalAmount, onFilterTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
