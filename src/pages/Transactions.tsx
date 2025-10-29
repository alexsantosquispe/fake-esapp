import { TransactionsTable } from '../components/molecules/TransactionsTable';

const Transactions = () => {
  return (
    <div className="flex w-full flex-col gap-5 py-8">
      <h1 className="text-2xl font-semibold">Transactions history</h1>

      <TransactionsTable />
    </div>
  );
};

export default Transactions;
