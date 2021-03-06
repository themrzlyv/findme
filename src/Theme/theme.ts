import { createTheme } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[800],
      light: lightBlue[400],
      dark: lightBlue[900],
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '50%'
        }
      }
    }
  },
  mixins: {
    toolbar: {
      height: '64px'
    }
  }
});