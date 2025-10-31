import { Suspense, lazy, useState } from 'react';

import { Button } from '../../atoms/Button';
import { CirclePlusIcon } from '../../../icons/CirclePlusIcon';
import SearchBar from '../../atoms/SearchBar';

interface HeaderSectionProps {
  onSearchHandler: (value: string, column: string) => void;
}

const NewTransactionModal = lazy(
  () => import('../NewTransactionModal/NewTransactionModal')
);

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

  return (
    <div className="flex w-[95dvw] flex-col items-center justify-center gap-2 rounded-t-xl border border-b-0 border-neutral-200 bg-white py-4 md:w-full md:flex-row md:justify-between md:p-4">
      <h2 className="text-lg font-medium">Transactions history</h2>
      <div className="flex w-full flex-col-reverse gap-2 px-4 md:w-fit md:flex-row md:p-0">
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
        <Suspense>
          <NewTransactionModal onClose={closeModal} />
        </Suspense>
      )}
    </div>
  );
};
