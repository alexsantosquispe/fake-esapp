import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../atoms/Button';
import { InputField } from '../../atoms/InputField';
import {
  NewTransactionFormSchema,
  type NewTransactionFormType
} from './NewTransactionForm.schema';
import { useForm, type Control, type FieldValues } from 'react-hook-form';
import { AccountsDropdown } from '../../atoms/AccountsDropdown';
import { ACCOUNTS_MOCK } from '../../../store/mock';
import { ArrowRightLeftIcon } from '../../../icons/ArrowRightLeftIcon';

interface NewTransactionFormProps {
  onSave: (formData: NewTransactionFormType) => void;
}

export const NewTransactionForm = ({ onSave }: NewTransactionFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<NewTransactionFormType>({
    resolver: zodResolver(NewTransactionFormSchema),
    defaultValues: {
      from: undefined,
      to: undefined,
      amount: ''
    }
  });

  const onSubmit = (formData: NewTransactionFormType) => {
    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-5 px-2 pt-3 pb-2"
    >
      <div className="flex flex-col items-start gap-2 rounded-lg border border-neutral-300 p-4 md:flex-row md:gap-5">
        <AccountsDropdown
          label="Origin account"
          name="from"
          control={control as unknown as Control<FieldValues>}
          placeholder="Select origin account"
          accounts={ACCOUNTS_MOCK}
          isRequired={true}
          errorMessage={errors.from?.message}
        />
        <div className="mt-6 rounded-full bg-amber-100 p-2 text-amber-500">
          <ArrowRightLeftIcon />
        </div>
        <AccountsDropdown
          label="Destination account"
          name="to"
          control={control as unknown as Control<FieldValues>}
          isRequired={true}
          placeholder="Select destination account"
          accounts={ACCOUNTS_MOCK}
          errorMessage={errors.to?.message}
        />
      </div>

      <InputField
        label="Amount"
        name="amount"
        control={control as unknown as Control<FieldValues>}
        type="number"
        placeholder="$0"
        isRequired={true}
        errorMessage={errors.amount?.message}
        className="[appearance:textfield] text-lg font-semibold [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />

      <Button type="submit" label="Transfer" ariaLabel="Transfer button" />
    </form>
  );
};
