import type { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}

export const InfoCard = ({ title, value, icon }: InfoCardProps) => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 p-2 shadow-sm md:gap-4 md:p-4">
      <div className="text-primary rounded-full bg-blue-100 p-2">{icon}</div>

      <div className="flex flex-col">
        <span className="text-xs font-medium text-neutral-500 md:text-sm">
          {title}
        </span>
        <span className="text-2xl font-semibold md:text-3xl">{value}</span>
      </div>
    </div>
  );
};
