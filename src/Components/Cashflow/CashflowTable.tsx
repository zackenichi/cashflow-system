import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { CashflowItem } from '../../Interfaces/CashflowItem';

interface CashflowTableProps {
  transactions: CashflowItem[];
}

const CashflowTable: React.FC<CashflowTableProps> = ({ transactions }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Cashflow Table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell component="th" scope="row">
                {transaction.date.toDateString()}
              </TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell align="right">
                {transaction.type === 'income' ? '+' : '-'} $
                {Math.abs(transaction.amount).toFixed(2)}
              </TableCell>
              <TableCell>
                {transaction.type === 'income' ? 'Income' : 'Expense'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CashflowTable;
