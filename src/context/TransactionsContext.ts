import type { TransactionType } from '../types';
import { createContext } from 'react';

interface TransactionsContextType {
  data: TransactionType[];
  totalAmount: number;
  createTransaction: (transaction: TransactionType) => void;
  completedTransactions: number;
  pendingTransactions: number;
  topAccount: { name: string; transactions: number } | null;
  showAlert: boolean;
}

const TransactionsContext = createContext<TransactionsContextType | null>(null);

export default TransactionsContext;
