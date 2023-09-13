import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d1b2a', // Change this to your preferred primary color
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#415a77', // Change this to your preferred secondary color
      contrastText: '#3A2E2F',
    },
    // Add more palette options as needed
  },
  typography: {
    fontFamily: 'Tahoma',
    allVariants: {
      color: '#0d1b2a', // Change this to your preferred text color
    },
    h1: {
      fontSize: '2rem', // Adjust the font size as needed
      fontWeight: 600, // Adjust the font weight as needed
      // Add other custom styles for h1 here
    },
  },
  // Add component overrides and other styling options as needed
});

export default theme;
