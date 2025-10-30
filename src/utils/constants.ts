export const TABLE_COLUMNS = [
  'id',
  'date',
  'type',
  'origin',
  'destination',
  'amount',
  'status'
];

export const SELECT_COLUMNS = [
  { value: 'fromAccount', label: 'Origin' },
  { value: 'toAccount', label: 'Destination' },
  { value: 'amount', label: 'Amount' }
];

export const STATUS_COLORS = {
  completed: 'bg-green-200',
  pending: 'bg-yellow-200',
  failed: 'bg-red-200'
};
