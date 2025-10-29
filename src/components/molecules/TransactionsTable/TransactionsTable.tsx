import { getAmountWithCurrency, getFriendlyDate } from '../../../utils/utils';

import { Cell } from '../../atoms/Cell';
import { StatusCell } from './components/StatusCell';
import { TABLE_COLUMNS } from '../../../utils/constants';
import { mockTransactions } from '../../../store/mock';

export const TransactionsTable = () => {
  return (
    <div className="flex w-full overflow-hidden rounded-xl border border-neutral-200">
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
          {mockTransactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-t border-neutral-200 hover:bg-neutral-50"
            >
              <Cell className="font-medium">{transaction.id}</Cell>
              <Cell>{getFriendlyDate(transaction.date)}</Cell>
              <Cell className="capitalize">{transaction.type}</Cell>
              <Cell>
                <div className="flex flex-col gap-1 font-medium">
                  <span>{transaction.from}</span>
                  <span className="text-xs text-neutral-500">
                    {transaction.fromAccount}
                  </span>
                </div>
              </Cell>
              <Cell>
                <div className="flex flex-col gap-1 font-medium">
                  <span>{transaction.to}</span>
                  <span className="text-xs text-neutral-500">
                    {transaction.toAccount}
                  </span>
                </div>
              </Cell>
              <Cell className="font-semibold">
                {getAmountWithCurrency(transaction.amount)}
              </Cell>
              <StatusCell status={transaction.status} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
