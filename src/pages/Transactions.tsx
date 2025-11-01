import {
  getAmountWithCurrency,
  getTotalTransferredToday
} from '../utils/utils';
import { useCallback, useMemo, useState } from 'react';

import { DollarSignIcon } from '../icons/DollarSignIcon';
import { HeaderSection } from '../components/molecules/HeaderSection/HeaderSection';
import { InfoCard } from '../components/atoms/InfoCard';
import type { TransactionType } from '../types';
import { TransactionsTable } from '../components/molecules/TransactionsTable/TransactionsTable';
import useTransactions from '../hooks/useTransactions';

const Transactions = () => {
  const { data, showAlert } = useTransactions();
  const [filterValue, setFilterValue] = useState({
    value: '',
    column: ''
  });

  const totalTransferredToday = useMemo(
    () => getTotalTransferredToday(data),
    [data]
  );

  const filteredData = useMemo(() => {
    if (!filterValue.value.trim()) return data;

    const column = filterValue?.column as keyof TransactionType;
    return data.filter((item) => {
      const columnValue = String(item[column]).toLowerCase();
      return columnValue.includes(filterValue.value.toLowerCase());
    });
  }, [data, filterValue]);

  const onSearchHandler = useCallback(
    (value: string, column: string) => setFilterValue({ value, column }),
    []
  );

  return (
    <div className="flex w-full flex-col gap-2 px-4 py-8 xl:px-0">
      <h1 className="text-2xl font-semibold">Transactions</h1>

      {showAlert && (
        <div className="absolute top-15 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-lg bg-green-200/90 px-4 py-2 text-sm font-medium text-green-900 shadow-lg transition-opacity duration-300">
          Transaction completed
        </div>
      )}

      <InfoCard
        title="Today total transactions"
        value={getAmountWithCurrency(totalTransferredToday)}
        icon={<DollarSignIcon />}
        className="w-fit"
      />

      <div className="flex flex-col items-center">
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
