import type { TransactionType } from '../types';
import { format } from 'date-fns';

export const getFriendlyDate = (date: string) => {
  return format(date, 'MMM dd, yyyy hh:mm a');
};

export const getAmountWithCurrency = (amount: number) => {
  return `$${amount.toFixed(2)}`;
};

export const getTotalTransferredToday = (data: TransactionType[]): number => {
  if (!data?.length) return 0;

  const today = new Date();

  return data
    .filter((transaction) => {
      if (transaction.status !== 'completed') return false;

      const transactionDate = new Date(transaction.date);
      return (
        transactionDate.getDate() === today.getDate() &&
        transactionDate.getMonth() === today.getMonth() &&
        transactionDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce((sum, transaction) => sum + transaction.amount, 0);
};

export const getAccountsByTransactions = (
  transactions: TransactionType[]
): Record<string, number> | null => {
  if (!transactions.length) return null;

  const accountsByTransactions = transactions.reduce(
    (accounts, transaction) => {
      accounts[transaction.from] = (accounts[transaction.from] || 0) + 1;
      return accounts;
    },
    {} as Record<string, number>
  );

  return accountsByTransactions;
};

export const getTopAccount = (
  accountsByTransactions: Record<string, number>
): { name: string; transactions: number } => {
  let name = '';
  let max = 0;

  for (const prop in accountsByTransactions) {
    if (accountsByTransactions[prop] > max) {
      name = prop as string;
      max = accountsByTransactions[prop];
    }
  }
  return { name, transactions: max };
};
