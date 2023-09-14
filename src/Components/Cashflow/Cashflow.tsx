import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { CashflowItem } from '../../Interfaces/CashflowItem';
import CashflowTable from './CashflowTable';

export interface CashflowProps {
  transactions: CashflowItem[];
}

const Cashflow: FC<CashflowProps> = ({ transactions }) => {
  console.log(transactions);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" color="primary">
          Cashflow
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CashflowTable transactions={transactions} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="primary">graph</Typography>
      </Grid>
    </Grid>
  );
};

export { Cashflow };
