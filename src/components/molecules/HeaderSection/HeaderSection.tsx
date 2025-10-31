import { Button } from '../../atoms/Button';
import { CirclePlusIcon } from '../../../icons/CirclePlusIcon';
import { Modal } from '../../atoms/Modal';
import { NewTransactionForm } from '../NewTransactionForm/NewTransactionForm';
import type { NewTransactionFormType } from '../NewTransactionForm/NewTransactionForm.schema';
import SearchBar from '../../atoms/SearchBar';
import { useState } from 'react';

interface HeaderSectionProps {
  onSearchHandler: (value: string, column: string) => void;
}

export const HeaderSection = ({ onSearchHandler }: HeaderSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const onSaveHandler = (formData: NewTransactionFormType) => {
    console.log(formData);
  };

  return (
    <div className="flex w-full items-center justify-between rounded-t-xl border border-b-0 border-neutral-200 bg-white p-4">
      <h2 className="text-lg font-medium">Transactions history</h2>
      <div className="flex gap-2">
        <SearchBar
          placeholder="Search by column..."
          onChange={onSearchHandler}
        />
        <Button
          label="Add transaction"
          ariaLabel="Add transaction"
          onClick={openModal}
          icon={<CirclePlusIcon className="size-5" />}
        />
      </div>
      {isModalOpen && (
        <Modal title="New transaction" onClose={closeModal}>
          <NewTransactionForm onSave={onSaveHandler} />
        </Modal>
      )}
    </div>
  );
};
