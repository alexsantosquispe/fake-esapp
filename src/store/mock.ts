import type { AccountType, TransactionType } from '../types';

export const TRANSACTIONS_MOCK: TransactionType[] = [
  {
    id: '10229831',
    type: 'transfer',
    from: 'John Doe',
    fromAccount: '1023456789',
    to: 'Emma Johnson',
    toAccount: '4067891230',
    amount: 410,
    date: '2025-10-31T22:33:28.000Z',
    status: 'completed'
  },
  {
    id: '10218467',
    type: 'transfer',
    from: 'Liam Wilson',
    fromAccount: '6089123450',
    to: 'Michael Smith',
    toAccount: '3056789120',
    amount: 375,
    date: '2025-10-31T14:59:55.000Z',
    status: 'pending'
  },
  {
    id: '10207538',
    type: 'transfer',
    from: 'Olivia Brown',
    fromAccount: '5078912340',
    to: 'Jane Doe',
    toAccount: '2045678910',
    amount: 140,
    date: '2025-10-31T10:24:44.000Z',
    status: 'completed'
  },
  {
    id: '10196854',
    type: 'transfer',
    from: 'Emma Johnson',
    fromAccount: '4067891230',
    to: 'John Doe',
    toAccount: '1023456789',
    amount: 200,
    date: '2025-10-30T18:00:17.000Z',
    status: 'completed'
  },
  {
    id: '10185712',
    type: 'transfer',
    from: 'Michael Smith',
    fromAccount: '3056789120',
    to: 'Olivia Brown',
    toAccount: '5078912340',
    amount: 330,
    date: '2025-10-30T13:31:09.000Z',
    status: 'pending'
  },
  {
    id: '10174326',
    type: 'transfer',
    from: 'Jane Doe',
    fromAccount: '2045678910',
    to: 'Liam Wilson',
    toAccount: '6089123450',
    amount: 460,
    date: '2025-10-30T09:58:42.000Z',
    status: 'completed'
  },
  {
    id: '10162957',
    type: 'transfer',
    from: 'Sophia Miller',
    fromAccount: '7091234560',
    to: 'Emma Johnson',
    toAccount: '4067891230',
    amount: 270,
    date: '2025-10-29T19:22:14.000Z',
    status: 'pending'
  },
  {
    id: '10150794',
    type: 'transfer',
    from: 'Liam Wilson',
    fromAccount: '6089123450',
    to: 'Olivia Brown',
    toAccount: '5078912340',
    amount: 310,
    date: '2025-10-29T15:05:23.000Z',
    status: 'completed'
  },
  {
    id: '10149368',
    type: 'transfer',
    from: 'John Doe',
    fromAccount: '1023456789',
    to: 'Sophia Miller',
    toAccount: '7091234560',
    amount: 220,
    date: '2025-10-29T12:47:56.000Z',
    status: 'completed'
  },
  {
    id: '10138215',
    type: 'transfer',
    from: 'Emma Johnson',
    fromAccount: '4067891230',
    to: 'Liam Wilson',
    toAccount: '6089123450',
    amount: 150,
    date: '2025-10-29T08:12:10.000Z',
    status: 'pending'
  },
  {
    id: '10127954',
    type: 'transfer',
    from: 'Michael Smith',
    fromAccount: '3056789120',
    to: 'John Doe',
    toAccount: '1023456789',
    amount: 500,
    date: '2025-10-28T17:24:45.000Z',
    status: 'completed'
  },
  {
    id: '10116893',
    type: 'transfer',
    from: 'Jane Doe',
    fromAccount: '2045678910',
    to: 'Olivia Brown',
    toAccount: '5078912340',
    amount: 90,
    date: '2025-10-28T11:18:33.000Z',
    status: 'pending'
  },
  {
    id: '10102456',
    type: 'transfer',
    from: 'Sophia Miller',
    fromAccount: '7091234560',
    to: 'John Doe',
    toAccount: '1023456789',
    amount: 220,
    date: '2025-10-28T09:42:10.000Z',
    status: 'completed'
  },
  {
    id: '10091268',
    type: 'transfer',
    from: 'Sophia Miller',
    fromAccount: '7091234560',
    to: 'Liam Wilson',
    toAccount: '6089123450',
    amount: 350,
    date: '2025-10-27T21:33:52.000Z',
    status: 'completed'
  },
  {
    id: '10084517',
    type: 'transfer',
    from: 'Olivia Brown',
    fromAccount: '5078912340',
    to: 'Emma Johnson',
    toAccount: '4067891230',
    amount: 120,
    date: '2025-10-27T18:15:19.000Z',
    status: 'pending'
  },
  {
    id: '10073492',
    type: 'transfer',
    from: 'Liam Wilson',
    fromAccount: '6089123450',
    to: 'Sophia Miller',
    toAccount: '7091234560',
    amount: 600,
    date: '2025-10-27T10:20:41.000Z',
    status: 'completed'
  },
  {
    id: '10067845',
    type: 'transfer',
    from: 'Emma Johnson',
    fromAccount: '4067891230',
    to: 'Olivia Brown',
    toAccount: '5078912340',
    amount: 430,
    date: '2025-10-26T14:10:05.000Z',
    status: 'pending'
  },
  {
    id: '10051237',
    type: 'transfer',
    from: 'Michael Smith',
    fromAccount: '3056789120',
    to: 'Emma Johnson',
    toAccount: '4067891230',
    amount: 80,
    date: '2025-10-26T08:30:45.000Z',
    status: 'completed'
  },
  {
    id: '10038924',
    type: 'transfer',
    from: 'Jane Doe',
    fromAccount: '2045678910',
    to: 'Michael Smith',
    toAccount: '3056789120',
    amount: 250,
    date: '2025-10-25T15:42:18.000Z',
    status: 'pending'
  },
  {
    id: '10024581',
    type: 'transfer',
    from: 'John Doe',
    fromAccount: '1023456789',
    to: 'Jane Doe',
    toAccount: '2045678910',
    amount: 100,
    date: '2025-10-25T09:15:23.000Z',
    status: 'completed'
  }
];

export const ACCOUNTS_MOCK: AccountType[] = [
  {
    id: 'b2b1e0b0-8e6f-4c76-b5d9-7c8a7280eac1',
    name: 'John Doe',
    account: '1023456789',
    totalAmount: 4000
  },
  {
    id: 'a6c9d8c3-7f8e-4c20-b67b-3d07b5321c2a',
    name: 'Emma Johnson',
    account: '4067891230',
    totalAmount: 1900
  },
  {
    id: 'e3fbbfb4-40a0-4f77-9212-9fba6a6a0219',
    name: 'Liam Wilson',
    account: '6089123450',
    totalAmount: 3050
  },
  {
    id: '9cc9b821-2185-4db9-86bb-d0a99d28cb1a',
    name: 'Michael Smith',
    account: '3056789120',
    totalAmount: 950
  },
  {
    id: '7df9f7d0-6a5b-41ea-94ab-3f9b5c54774b',
    name: 'Olivia Brown',
    account: '5078912340',
    totalAmount: 680
  },
  {
    id: 'e928e4c3-1968-48e5-b5a8-10bafc054142',
    name: 'Jane Doe',
    account: '2045678910',
    totalAmount: 5300
  },
  {
    id: '5b13f4d2-8cb8-47b1-9c56-0b2c8709867a',
    name: 'Sophia Miller',
    account: '7091234560',
    totalAmount: 1800
  }
];
