import { Button } from '../../atoms/Button';
import { CirclePlusIcon } from '../../../icons/CirclePlusIcon';
import { SearchBar } from '../../atoms/SearchBar';
interface HeaderSectionProps {
  onSearchHandler: (value: string, column: string) => void;
}

export const HeaderSection = ({ onSearchHandler }: HeaderSectionProps) => {
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
