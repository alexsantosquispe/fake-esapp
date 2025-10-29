import { format } from 'date-fns';

export const getFriendlyDate = (date: string) => {
  return format(date, 'MMM dd, yyyy hh:mm a');
};

export const getAmountWithCurrency = (amount: number) => {
  return `$${amount.toFixed(2)}`;
};
