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
  { value: 'from', label: 'Ori. name' },
  { value: 'fromAccount', label: 'Ori. account' },
  { value: 'to', label: 'Dest. name' },
  { value: 'toAccount', label: 'Dest. account' },
  { value: 'amount', label: 'Amount' },
  { value: 'status', label: 'Status' }
];

export const STATUS_COLORS = {
  completed: 'bg-green-200',
  pending: 'bg-yellow-200',
  failed: 'bg-red-200'
};
