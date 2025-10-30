export interface SvgIconProps {
  className?: string;
}

export type StatusType = 'completed' | 'pending';

export interface TransactionType {
  id: string;
  type: string;
  from: string;
  fromAccount: string;
  to: string;
  toAccount: string;
  amount: number;
  date: string;
  status: StatusType;
}
