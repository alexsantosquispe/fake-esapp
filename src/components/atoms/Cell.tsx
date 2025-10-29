import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CellProps {
  children: ReactNode;
  isHeader?: boolean;
  className?: string;
}

export const Cell = ({ children, isHeader = false, className }: CellProps) => {
  const CELL_STYLES = 'p-4 text-start';

  if (isHeader) {
    return (
      <th
        className={twMerge(
          CELL_STYLES,
          'bg-neutral-100 font-medium capitalize',
          className
        )}
      >
        {children}
      </th>
    );
  }

  return <td className={twMerge(CELL_STYLES, className)}>{children}</td>;
};
