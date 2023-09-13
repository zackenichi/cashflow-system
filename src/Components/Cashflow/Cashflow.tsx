import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

const Cashflow: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" color="primary">
          Cashflow
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color="primary">table</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color="primary">graph</Typography>
      </Grid>
    </Grid>
  );
};

export { Cashflow };
