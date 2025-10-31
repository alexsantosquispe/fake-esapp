import { Modal } from '../../atoms/Modal';
import { NewTransactionForm } from '../NewTransactionForm/NewTransactionForm';
import type { NewTransactionFormType } from '../NewTransactionForm/NewTransactionForm.schema';

interface NewTransactionModalProps {
  onClose: () => void;
}

const NewTransactionModal = ({ onClose }: NewTransactionModalProps) => {
  const onSaveHandler = (formData: NewTransactionFormType) => {
    console.log(formData);
  };

  return (
    <Modal title="New transaction" onClose={onClose}>
      <NewTransactionForm onSave={onSaveHandler} />
    </Modal>
  );
};

export default NewTransactionModal;
