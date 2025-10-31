import type { TransactionType } from '../types';
import { createContext } from 'react';

interface TransactionsContextType {
  data: TransactionType[];
  totalAmount: number;
  createTransaction: (transaction: TransactionType) => void;
}

const TransactionsContext = createContext<TransactionsContextType | null>(null);

export default TransactionsContext;
