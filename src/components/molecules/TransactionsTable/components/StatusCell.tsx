import { Cell } from '../../../atoms/Cell';
import { twMerge } from 'tailwind-merge';

interface StatusCellProps {
  status: 'completed' | 'pending';
}

const STATUS_COLORS = {
  completed: 'bg-green-200 text-green-800',
  pending: 'bg-yellow-200 text-yellow-800'
};

export const StatusCell = ({ status }: StatusCellProps) => {
  const statusStyles = STATUS_COLORS[status];
  return (
    <Cell>
      <span
        className={twMerge(
          'rounded-md px-2 py-1 text-xs font-semibold uppercase',
          statusStyles
        )}
      >
        {status}
      </span>
    </Cell>
  );
};
