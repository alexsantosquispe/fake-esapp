import { DollarSignIcon } from '../icons/DollarSignIcon';
import { InfoCard } from '../components/atoms/InfoCard';
import { getAmountWithCurrency } from '../utils/utils';
import useTransactions from '../hooks/useTransactions';

const Dashboard = () => {
  const {
    totalAmount,
    completedTransactions,
    pendingTransactions,
    topAccount
  } = useTransactions();

  return (
    <div className="flex w-full flex-col gap-8 px-4 py-8 xl:px-0">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <section className="flex w-full flex-col gap-4">
        <h2 className="text-lg font-semibold">Transactions Overview</h2>
        <div className="grid grid-cols-2 gap-2 md:gap-4 xl:grid-cols-4">
          <InfoCard
            title="Total amount transactions"
            value={getAmountWithCurrency(totalAmount)}
            icon={<DollarSignIcon className="size-5" />}
            className="w-full"
          />

          <InfoCard
            title="Completed transactions"
            value={completedTransactions.toString()}
            icon={<DollarSignIcon className="size-5" />}
            className="w-full"
          />

          <InfoCard
            title="Pending transactions"
            value={pendingTransactions.toString()}
            icon={<DollarSignIcon className="size-5" />}
            className="w-full"
          />

          {topAccount && (
            <InfoCard
              title="Top account"
              value={topAccount?.name}
              secondValue={`${topAccount?.transactions} transactions`}
              icon={<DollarSignIcon className="size-5" />}
              className="w-full"
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
