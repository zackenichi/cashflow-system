import { Box, Container } from '@mui/material';
import { Cashflow } from './Components/Cashflow';

function App() {
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
        <Cashflow />
      </Box>
    </Container>
  );
}

export default App;
