import type { TransactionType } from '../types';
import { createContext } from 'react';

interface TransactionsContextType {
  data: TransactionType[];
  totalAmount: number;
  onFilterTransactions: (value: string, column: keyof TransactionType) => void;
}

const TransactionsContext = createContext<TransactionsContextType | null>(null);

export default TransactionsContext;
