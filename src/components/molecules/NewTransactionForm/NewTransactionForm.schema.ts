import z from 'zod';

export const NewTransactionFormSchema = z.object({
  from: z.string().min(1, 'Origin account required'),
  to: z.string().min(1, 'Destination account required'),
  amount: z.string().min(1, 'Amount required')
});

export type NewTransactionFormType = z.infer<typeof NewTransactionFormSchema>;
