import { Button } from '../../atoms/Button';
import { CirclePlusIcon } from '../../../icons/CirclePlusIcon';
import { SearchBar } from '../../atoms/SearchBar';
import type { TransactionType } from '../../../types';
import useTransactions from '../../../hooks/useTransactions';

export const HeaderSection = () => {
  const { onFilterTransactions } = useTransactions();

  const onSearchHandler = (value: string, column: string) => {
    onFilterTransactions(value, column as keyof TransactionType);
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
          onClick={() => {}}
          icon={<CirclePlusIcon className="size-5" />}
        />
      </div>
    </div>
  );
};
