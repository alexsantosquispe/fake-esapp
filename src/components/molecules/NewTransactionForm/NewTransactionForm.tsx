import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../atoms/Button';
import { InputField } from '../../atoms/InputField';
import {
  NewTransactionFormSchema,
  type NewTransactionFormType
} from './NewTransactionForm.schema';
import { useForm, type Control, type FieldValues } from 'react-hook-form';

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
      from: '',
      to: '',
      amount: ''
    }
  });

  const onSubmit = (formData: NewTransactionFormType) => {
    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-5 px-2 pb-2"
    >
      <div className="flex gap-5">
        <InputField
          label="User name origin"
          name="from"
          control={control as unknown as Control<FieldValues>}
          placeholder="Enter client name"
          isRequired={true}
          errorMessage={errors.from?.message}
        />
        <InputField
          label="User name destination"
          name="to"
          control={control as unknown as Control<FieldValues>}
          placeholder="Enter client name of destination"
          isRequired={true}
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
