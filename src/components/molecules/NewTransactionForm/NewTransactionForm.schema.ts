import { z } from 'zod';

export const AccountSchema = z.object({
  id: z.string(),
  name: z.string(),
  account: z.string(),
  totalAmount: z.number()
});

export const NewTransactionFormSchema = z
  .object({
    from: AccountSchema.optional(),
    to: AccountSchema.optional(),
    amount: z
      .string()
      .min(1, 'Amount required')
      .refine((val) => parseFloat(val) > 0, {
        message: 'Amount must be greater than $0.00'
      })
  })
  .refine((data) => !!data.from, {
    message: 'Origin account required',
    path: ['from']
  })
  .refine((data) => !!data.to, {
    message: 'Destination account required',
    path: ['to']
  })
  .refine(
    (data) => {
      const value =
        !!data.from && !!data.to && data.from.account !== data.to.account;
      return value;
    },
    {
      message: 'Destination account must be different',
      path: ['to']
    }
  )
  .refine(
    (data) =>
      data.from &&
      data.amount &&
      parseFloat(data.amount) <= data.from.totalAmount,
    {
      message: 'Insufficient funds in origin account',
      path: ['amount']
    }
  );

export type NewTransactionFormType = z.infer<typeof NewTransactionFormSchema>;
