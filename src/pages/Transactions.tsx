import { DollarSignIcon } from '../icons/DollarSignIcon';
import { InfoCard } from '../components/atoms/InfoCard';
import { TRANSACTIONS_MOCK } from '../store/mock';
import { TransactionsTable } from '../components/molecules/TransactionsTable/TransactionsTable';
import { getAmountWithCurrency } from '../utils/utils';
import { useMemo } from 'react';

const Transactions = () => {
  const totalAmount = useMemo(
    () =>
      TRANSACTIONS_MOCK.reduce(
        (acc, transaction) => acc + transaction.amount,
        0
      ),
    []
  );

  return (
    <div className="flex w-full flex-col gap-5 px-4 py-8 xl:px-0">
      <h1 className="text-2xl font-semibold">Transactions history</h1>

      <div className="flex gap-4">
        <InfoCard
          title="Total amount"
          value={getAmountWithCurrency(totalAmount)}
          icon={<DollarSignIcon className="size-5" />}
        />
      </div>

      <TransactionsTable data={TRANSACTIONS_MOCK} />
    </div>
  );
};

export default Transactions;
