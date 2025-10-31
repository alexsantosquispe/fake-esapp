import type { ReactNode } from 'react';
import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  label: string;
  ariaLabel: string;
  onClick?: () => void;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  className?: string;
}

export const Button = ({
  label,
  ariaLabel,
  onClick,
  icon,
  type = 'button',
  isDisabled = false,
  className
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className={twMerge(
        'bg-primary flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white',
        cn({ 'hover:bg-primary/90 hover:cursor-pointer': !isDisabled }),
        className
      )}
    >
      {!!icon && icon}
      {label}
    </button>
  );
};
