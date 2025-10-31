import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'number';
  errorMessage?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
}

export const InputField = ({
  label,
  name,
  placeholder,
  type = 'text',
  errorMessage,
  isDisabled = false,
  isRequired = false,
  className
}: InputFieldProps) => {
  return (
    <div className="flex w-full flex-col text-sm">
      <label htmlFor={name} className="font-medium">
        {label}
        {isRequired && <span className="text-rose-600">&nbsp;*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={isDisabled}
        className={twMerge(
          'w-full rounded-lg border border-neutral-300 px-4 py-2',
          cn({ 'border-rose-600': !!errorMessage }),
          className
        )}
        min={0}
      />
      {errorMessage && (
        <span className="text-xs font-medium text-red-600">{errorMessage}</span>
      )}
    </div>
  );
};
