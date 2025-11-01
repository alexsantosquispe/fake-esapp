import { useMemo, useState, type ReactNode } from 'react';
import TransactionsContext from './TransactionsContext';
import { TRANSACTIONS_MOCK } from '../store/mock';
import type { TransactionType } from '../types';
import { getAccountsByTransactions, getTopAccount } from '../utils/utils';

interface TransactionsProviderType {
  children: ReactNode;
}

const TransactionsProvider = ({ children }: TransactionsProviderType) => {
  const [data, setData] = useState<TransactionType[]>(TRANSACTIONS_MOCK);
  const completedTransactions = useMemo(
    () => data.filter((transaction) => transaction.status === 'completed'),
    [data]
  );
  const pendingTransactions = useMemo(
    () => data.filter((transaction) => transaction.status === 'pending'),
    [data]
  );

  const totalAmount = useMemo(
    () => data.reduce((acc, transaction) => acc + transaction.amount, 0),
    [data]
  );

  const topAccount = useMemo(() => {
    const accountsByTransactions = getAccountsByTransactions(
      completedTransactions
    );
    if (!accountsByTransactions) return null;

    return getTopAccount(accountsByTransactions);
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
