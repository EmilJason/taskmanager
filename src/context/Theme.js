import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { blueGrey, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
  palette: {
    primary: {
      main: blueGrey[500],
      contrastText: blueGrey[10],
    },
    secondary: {
      main: red[500],
      contrastText: red[10],
    },
  },
});

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
