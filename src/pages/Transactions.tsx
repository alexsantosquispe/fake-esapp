import { DollarSignIcon } from '../icons/DollarSignIcon';
import { HeaderSection } from '../components/molecules/HeaderSection/HeaderSection';
import { InfoCard } from '../components/atoms/InfoCard';
import { TransactionsTable } from '../components/molecules/TransactionsTable/TransactionsTable';
import { getAmountWithCurrency } from '../utils/utils';
import useTransactions from '../hooks/useTransactions';

const Transactions = () => {
  const { data, totalAmount } = useTransactions();

  return (
    <div className="flex w-full flex-col gap-2 px-4 py-8 xl:px-0">
      <h1 className="text-2xl font-semibold">Transactions</h1>

      <InfoCard
        title="Total transactions"
        value={getAmountWithCurrency(totalAmount)}
        icon={<DollarSignIcon className="size-5" />}
      />

      <div className="flex flex-col">
        <HeaderSection />

        <TransactionsTable data={data} />
      </div>
    </div>
  );
};

export default Transactions;
