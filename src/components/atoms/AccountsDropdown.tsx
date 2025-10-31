import { useRef, useState } from 'react';

import { Button } from './Button';
import { ChevronUpDownIcon } from '../../icons/ChevronUpDownIcon';
import { Controller, type Control, type FieldValues } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { useClickOutside } from '../../hooks/useClickOutside';
import type { AccountType } from '../../types';
import { useGetRandomPhoto } from '../../hooks/useGetRandomPhoto';
import { UserIcon } from '../../icons/UserIcon';
import cn from 'clsx';

interface AccountsDropdownProps {
  label: string;
  name: string;
  control: Control<FieldValues>;
  accounts: AccountType[];
  placeholder: string;
  errorMessage?: string;
  isRequired?: boolean;
  className?: string;
}

export const AccountsDropdown = ({
  label,
  name,
  control,
  accounts,
  placeholder,
  errorMessage,
  isRequired = false,
  className
}: AccountsDropdownProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userSelected, setUserSelected] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsMenuOpen(false));

  const { photo } = useGetRandomPhoto(userSelected);

  const openMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        const onSelectOption = (account: AccountType) => {
          onChange(account);
          setUserSelected(account.name);
          setIsMenuOpen(false);
        };

        return (
          <div className="relative" ref={dropdownRef}>
            <label htmlFor={name} className="font-medium">
              {label}
              {isRequired && <span className="text-rose-600">&nbsp;*</span>}
            </label>
            <Button
              label={placeholder}
              ariaLabel={label}
              onClick={openMenu}
              className={twMerge(
                'h-12 w-64 flex-row-reverse justify-between border border-neutral-300 bg-white px-2 py-0 font-medium text-neutral-500 hover:bg-neutral-100',
                cn({ 'border-rose-600': !!errorMessage }),
                className
              )}
              icon={<ChevronUpDownIcon className="size-4" />}
            >
              {value && (
                <div className="flex items-center gap-2">
                  <div className="size-7">
                    {!photo && (
                      <div className="flex size-7 items-center justify-center rounded-full bg-neutral-500">
                        <UserIcon className="size-5 text-white" />
                      </div>
                    )}
                    {photo && (
                      <img
                        src={photo}
                        alt="user photo"
                        className="size-7 rounded-full"
                      />
                    )}
                  </div>
                  <span className="text-black">{value.name}</span>
                </div>
              )}
            </Button>
            {errorMessage && (
              <span className="text-xs font-medium text-red-600">
                {errorMessage}
              </span>
            )}

            {isMenuOpen && accounts.length > 0 && (
              <div className="absolute z-10 mt-1 flex max-h-36 w-full flex-col gap-1 overflow-y-auto rounded-lg border border-neutral-300 bg-white p-1 font-medium shadow-md">
                {accounts.map((account) => (
                  <div
                    key={account.id}
                    onClick={() => onSelectOption(account)}
                    className="flex w-full flex-col rounded-md px-2 py-1 text-start text-black hover:bg-neutral-100"
                  >
                    <span className="text-[0.8125rem]">{account.name}</span>
                    <span className="text-xs text-neutral-500">
                      {account.account}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }}
    />
  );
};
