import { Box, Container } from '@mui/material';
import { Cashflow } from './Components/Cashflow';
import { useEffect, useState } from 'react';
import { CashflowItem, TransactionType } from './Interfaces/CashflowItem';

const mockTransactions: CashflowItem[] = [
  {
    id: 1,
    date: new Date('2023-09-01'),
    description: 'Salary',
    amount: 3000,
    type: TransactionType.Income,
  },
  {
    id: 2,
    date: new Date('2023-09-05'),
    description: 'Rent',
    amount: -1200,
    type: TransactionType.Expense,
  },
  {
    id: 3,
    date: new Date('2023-09-10'),
    description: 'Groceries',
    amount: -200,
    type: TransactionType.Expense,
  },
  {
    id: 4,
    date: new Date('2023-09-15'),
    description: 'Gasoline',
    amount: -50,
    type: TransactionType.Expense,
  },
  {
    id: 5,
    date: new Date('2023-09-20'),
    description: 'Bonus',
    amount: 500,
    type: TransactionType.Income,
  },
  {
    id: 6,
    date: new Date('2023-08-20'),
    description: 'Bonus',
    amount: 500,
    type: TransactionType.Income,
  },
  {
    id: 7,
    date: new Date('2023-07-20'),
    description: 'Bonus',
    amount: 0,
    type: TransactionType.Income,
  },
  {
    id: 8,
    date: new Date('2023-06-20'),
    description: 'Bonus',
    amount: 500,
    type: TransactionType.Income,
  },
  {
    id: 9,
    date: new Date('2023-05-20'),
    description: 'Bonus',
    amount: 0,
    type: TransactionType.Income,
  },
  {
    id: 10,
    date: new Date('2023-04-20'),
    description: 'Bonus',
    amount: 0,
    type: TransactionType.Income,
  },
];

function App() {
  const [transactions, setTransactions] = useState<CashflowItem[]>([]);

  // simulate database call
  useEffect(() => {
    // Simulate a database call by setting the state with mockTransactions after a delay (e.g., 1 second)
    setTimeout(() => {
      setTransactions(mockTransactions);
    }, 1000); // Adjust the delay as needed
  }, []); // Empty dependency array to run this effect only once

  return (
    <Container maxWidth="md" data-testid="app-container">
      <Box
        sx={{
          flexGrow: 1,
          alignItems: 'center',
          flexDirection: 'column',
          padding: 4,
        }}
      >
        <Cashflow transactions={transactions} />
      </Box>
    </Container>
  );
}

export default App;
