import { Modal } from '../../atoms/Modal';
import { NewTransactionForm } from '../NewTransactionForm/NewTransactionForm';
import type { NewTransactionFormType } from '../NewTransactionForm/NewTransactionForm.schema';
import type { TransactionType } from '../../../types';
import useTransactions from '../../../hooks/useTransactions';

interface NewTransactionModalProps {
  onClose: () => void;
}

const NewTransactionModal = ({ onClose }: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions();
  const onSaveHandler = (formData: NewTransactionFormType) => {
    const newTransaction: TransactionType = {
      id: Date.now() as unknown as string,
      type: 'Transfer',
      from: formData.from?.name as string,
      fromAccount: formData.from?.account as string,
      to: formData.to?.name as string,
      toAccount: formData.to?.account as string,
      amount: parseInt(formData.amount),
      date: Date.now() as unknown as string,
      status: 'completed'
    };
    createTransaction(newTransaction);
    onClose();
  };

  return (
    <Modal title="New transaction" onClose={onClose}>
      <NewTransactionForm onSave={onSaveHandler} />
    </Modal>
  );
};

export default NewTransactionModal;
