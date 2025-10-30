import { useMemo, useState } from 'react';

import { DollarSignIcon } from '../icons/DollarSignIcon';
import { HeaderSection } from '../components/molecules/HeaderSection/HeaderSection';
import { InfoCard } from '../components/atoms/InfoCard';
import type { TransactionType } from '../types';
import { TransactionsTable } from '../components/molecules/TransactionsTable/TransactionsTable';
import { getAmountWithCurrency } from '../utils/utils';
import useTransactions from '../hooks/useTransactions';

const Transactions = () => {
  const { data, totalAmount } = useTransactions();
  const [filterValue, setFilterValue] = useState({
    value: '',
    column: ''
  });

  const filteredData = useMemo(() => {
    if (!filterValue.value.trim()) return data;

    const column = filterValue?.column as keyof TransactionType;
    return data.filter((item) => {
      const columnValue = String(item[column]).toLowerCase();
      return columnValue.includes(filterValue.value.toLowerCase());
    });
  }, [data, filterValue]);

  const onSearchHandler = (value: string, column: string) =>
    setFilterValue({ value, column });

  return (
    <div className="flex w-full flex-col gap-2 px-4 py-8 xl:px-0">
      <h1 className="text-2xl font-semibold">Transactions</h1>

      <InfoCard
        title="Total transactions"
        value={getAmountWithCurrency(totalAmount)}
        icon={<DollarSignIcon className="size-5" />}
      />

      <div className="flex flex-col">
        <HeaderSection onSearchHandler={onSearchHandler} />

        <TransactionsTable
          data={filteredData}
          totalTransactions={data.length}
        />
      </div>
    </div>
  );
};

export default Transactions;
