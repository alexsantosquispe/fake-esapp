import { getAmountWithCurrency, getFriendlyDate } from '../../../utils/utils';

import { AccountCell } from './components/AccountCell';
import { Cell } from '../../atoms/Cell';
import { StatusCell } from './components/StatusCell';
import { TABLE_COLUMNS } from '../../../utils/constants';
import type { TransactionType } from '../../../types';
import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TransactionsTableProps {
  data: TransactionType[];
  totalTransactions: number;
}

export const TransactionsTable = ({
  data,
  totalTransactions
}: TransactionsTableProps) => {
  return (
    <div
      className={twMerge(
        'flex w-[95dvw] self-center overflow-auto rounded-b-xl border border-neutral-200 bg-white md:w-full',
        cn({ 'h-[40dvh]': !data.length })
      )}
    >
      {!data.length && (
        <div className="flex min-h-1/2 flex-1 items-center justify-center">
          No transactions found
        </div>
      )}

      {data.length > 0 && (
        <table className="w-full text-sm">
          <thead>
            <tr>
              {TABLE_COLUMNS.map((column) => (
                <Cell key={column} isHeader={true}>
                  {column}
                </Cell>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-t border-neutral-200 hover:bg-neutral-50"
              >
                <Cell className="font-medium">{transaction.id}</Cell>
                <Cell className="min-w-32 md:w-fit">
                  {getFriendlyDate(transaction.date)}
                </Cell>
                <Cell className="capitalize">{transaction.type}</Cell>
                <Cell>
                  <AccountCell
                    userName={transaction.from}
                    userAccount={transaction.fromAccount}
                  />
                </Cell>
                <Cell>
                  <AccountCell
                    userName={transaction.to}
                    userAccount={transaction.toAccount}
                  />
                </Cell>
                <Cell className="font-semibold">
                  {getAmountWithCurrency(transaction.amount)}
                </Cell>
                <StatusCell status={transaction.status} />
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-neutral-200">
              <Cell className="py-4 text-xs">
                <span>{`Showing ${data.length} of ${totalTransactions} results`}</span>
              </Cell>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};
