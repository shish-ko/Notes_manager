import { createTheme } from "@mui/material";
import { blue, green, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      
    },
    error: {
      main: '#B70002'
    }
  },
  typography: {
    h1: {
      fontSize: '3rem',
      textTransform: 'capitalize',
    }
  }
});