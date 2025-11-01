import { useEffect, useMemo, useState, type ReactNode } from 'react';
import TransactionsContext from './TransactionsContext';
import { TRANSACTIONS_MOCK } from '../store/mock';
import type { TransactionType } from '../types';
import { getAccountsByTransactions, getTopAccount } from '../utils/utils';

interface TransactionsProviderType {
  children: ReactNode;
}

const LOCAL_STORAGE_KEY = 'transactions';

const TransactionsProvider = ({ children }: TransactionsProviderType) => {
  const [data, setData] = useState<TransactionType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setData(JSON.parse(stored));
    } else {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(TRANSACTIONS_MOCK)
      );
      setData(TRANSACTIONS_MOCK);
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
  }, [data]);

  const completedTransactions = useMemo(
    () => data.filter((t) => t.status === 'completed'),
    [data]
  );

  const pendingTransactions = useMemo(
    () => data.filter((t) => t.status === 'pending'),
    [data]
  );

  const totalAmount = useMemo(
    () => data.reduce((acc, t) => acc + t.amount, 0),
    [data]
  );

  const topAccount = useMemo(() => {
    const accountsByTransactions = getAccountsByTransactions(
      completedTransactions
    );
    return accountsByTransactions
      ? getTopAccount(accountsByTransactions)
      : null;
  }, [completedTransactions]);

  const createTransaction = (transaction: TransactionType) => {
    setData((prev) => [transaction, ...prev]);
  };

  return (
    <TransactionsContext.Provider
      value={{
        data,
        totalAmount,
        createTransaction,
        completedTransactions: completedTransactions.length,
        pendingTransactions: pendingTransactions.length,
        topAccount
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
