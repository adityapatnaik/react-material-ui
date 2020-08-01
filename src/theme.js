import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#292d4b',
      main: '#000123',
      dark:'#000000',
    },
    secondary: {
      main: green[500]
    }
  }
});

export default theme;
