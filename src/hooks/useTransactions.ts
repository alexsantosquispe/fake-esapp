import TransactionsContext from '../context/TransactionsContext';
import { useContext } from 'react';

const useTransactions = () => {
  const transactionsContext = useContext(TransactionsContext);

  if (!transactionsContext) {
    throw new Error(
      'useTransactions should be wrapped in a TransactionsProvider'
    );
  }

  return transactionsContext;
};

export default useTransactions;
