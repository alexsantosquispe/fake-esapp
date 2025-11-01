import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface InfoCardProps {
  title: string;
  value: string;
  secondValue?: string;
  icon: ReactNode;
  className?: string;
}

export const InfoCard = ({
  title,
  value,
  secondValue,
  icon,
  className
}: InfoCardProps) => {
  return (
    <div
      className={twMerge(
        'flex h-24 w-full items-center justify-center gap-4 rounded-xl border border-neutral-200 bg-white p-2 md:gap-5 md:p-4',
        className
      )}
    >
      <div className="text-primary rounded-full bg-blue-100 p-2">{icon}</div>
      <div className="flex flex-col">
        <span className="text-xs font-medium text-neutral-500 md:text-sm">
          {title}
        </span>
        <span className="text-lg font-semibold md:text-2xl">{value}</span>
        {secondValue && (
          <span className="text-xs md:text-sm">{secondValue}</span>
        )}
      </div>
    </div>
  );
};
