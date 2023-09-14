export interface CashflowItem {
  id?: number;
  date: Date;
  description: string;
  amount: number;
  type: TransactionType;
}

export enum TransactionType {
  Income = 'income',
  Expense = 'expense',
}
