import { Cell } from '../atoms/Cell';
import { TABLE_COLUMNS } from '../../constants';
import { mockTransactions } from '../../store/mock';

export const TransactionsTable = () => {
  return (
    <div className="flex w-full overflow-hidden rounded-lg border border-neutral-200">
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
              <Cell>{transaction.date}</Cell>
              <Cell>{transaction.type}</Cell>
              <Cell>{transaction.from}</Cell>
              <Cell>{transaction.to}</Cell>
              <Cell>{transaction.amount}</Cell>
              <Cell>{transaction.status}</Cell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
