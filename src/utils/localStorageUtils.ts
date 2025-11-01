import { LOCAL_STORAGE_KEY } from './constants';
import type { TransactionType } from '../types';

export const getStoredTransactions = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEY);
};

export const saveTransactions = (data: TransactionType[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
