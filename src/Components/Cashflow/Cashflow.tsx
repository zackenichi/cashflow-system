import React from 'react';
import { Grid, Typography } from '@mui/material';
import CashflowTable from './CashflowTable';
import CashflowGraph from './CashflowGraph';
import { CashflowItem, TransactionType } from '../../Interfaces/CashflowItem';

export interface CashflowProps {
  transactions: CashflowItem[];
}

interface ChartData {
  [month: string]: number;
}

const Cashflow: React.FC<CashflowProps> = ({ transactions }) => {
  //   console.log(transactions);

  const chartData: ChartData = transactions.reduce(
    (acc: ChartData, transaction) => {
      const transactionDate = new Date(transaction.date);
      const month = transactionDate.toLocaleString('default', {
        month: 'short', // Use 'short' for abbreviated month names like 'Sept'
      });

      if (!acc[month]) {
        acc[month] = 0;
      }

      if (transaction.type === TransactionType.Income) {
        acc[month] += transaction.amount;
      } else {
        acc[month] -= transaction.amount;
      }

      return acc;
    },
    {}
  );

  // Convert chartData object into an array of objects for Victory Chart
  const chartDataArray = Object.keys(chartData).map((month) => ({
    x: month,
    y: chartData[month],
  }));

  // Sort the chartDataArray based on month values

  const sortedChartDataArray = chartDataArray.reverse();

  console.log(sortedChartDataArray);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" color="primary">
          Cashflow
        </Typography>
      </Grid>
      <Grid item xs={12} data-testid="cashflow-table">
        <CashflowTable transactions={transactions} />
      </Grid>
      <Grid item xs={12}>
        <CashflowGraph data={sortedChartDataArray} />
      </Grid>
    </Grid>
  );
};

export { Cashflow };
