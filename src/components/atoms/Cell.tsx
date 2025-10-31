import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CellProps {
  children: ReactNode;
  isHeader?: boolean;
  className?: string;
  colSpan?: number;
}

export const Cell = ({
  children,
  isHeader = false,
  className,
  colSpan = 1
}: CellProps) => {
  const CELL_STYLES = 'min-w-24 p-4 text-start';

  if (isHeader) {
    return (
      <th
        className={twMerge(CELL_STYLES, 'font-medium capitalize', className)}
        colSpan={colSpan}
      >
        {children}
      </th>
    );
  }

  return (
    <td className={twMerge(CELL_STYLES, 'py-2', className)} colSpan={colSpan}>
      {children}
    </td>
  );
};
