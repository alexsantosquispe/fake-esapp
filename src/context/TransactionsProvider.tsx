import { useEffect, useMemo, useState, type ReactNode } from 'react';
import TransactionsContext from './TransactionsContext';
import { TRANSACTIONS_MOCK } from '../store/mock';
import type { TransactionType } from '../types';
import { getAccountsByTransactions, getTopAccount } from '../utils/utils';
import {
  getStoredTransactions,
  saveTransactions
} from '../utils/localStorageUtils';

interface TransactionsProviderType {
  children: ReactNode;
}

const TransactionsProvider = ({ children }: TransactionsProviderType) => {
  const [data, setData] = useState<TransactionType[]>([]);

  useEffect(() => {
    const stored = getStoredTransactions();
    if (stored) {
      setData(JSON.parse(stored));
    } else {
      saveTransactions(TRANSACTIONS_MOCK);
      setData(TRANSACTIONS_MOCK);
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      saveTransactions(data);
    }
  }, [data]);

  const completedTransactions = useMemo(
    () => data.filter((transaction) => transaction.status === 'completed'),
    [data]
  );

  const pendingTransactions = useMemo(
    () => data.filter((transaction) => transaction.status === 'pending'),
    [data]
  );

  const totalAmount = useMemo(
    () =>
      completedTransactions.reduce(
        (acc, transaction) => acc + transaction.amount,
        0
      ),
    [completedTransactions]
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
