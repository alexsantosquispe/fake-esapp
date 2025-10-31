import { Button } from '../../atoms/Button';
import { InputField } from '../../atoms/InputField';

interface NewTransactionFormProps {
  onSave: () => void;
}

export const NewTransactionForm = ({ onSave }: NewTransactionFormProps) => {
  return (
    <form onSubmit={onSave} className="flex w-full flex-col gap-4 px-2 pb-2">
      <div className="flex gap-4">
        <InputField
          label="User name origin"
          name="from"
          type="text"
          placeholder="Enter client name"
        />
        <InputField
          label="User name destination"
          name="to"
          type="text"
          placeholder="Enter client name of destination"
        />
      </div>

      <InputField
        label="Amount"
        name="amount"
        type="number"
        placeholder="$0"
        isRequired={true}
        className="[appearance:textfield] text-lg font-semibold [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />

      <Button
        type="submit"
        label="Transfer"
        ariaLabel="Transfer button"
        onClick={onSave}
      />
    </form>
  );
};
