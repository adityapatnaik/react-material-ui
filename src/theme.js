import { createMuiTheme } from "@material-ui/core/styles";
import white from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    common: {
      black:'#000',
      white:'#fff',
    },
    shape:{
      borderRadius: 4,
    },
    primary: {
      light: '#292d4b',
      main: '#000123',
      dark:'#000000',
    },
    secondary: {
      main: white[500],
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  }
});

export default theme;
