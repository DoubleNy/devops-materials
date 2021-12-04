import { createTheme } from "@mui/material";

const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: "IBM Plex Sans",
    htmlFontSize: 14,
    fontSize: 12,
    body1: {
      lineHeight: 1.33,
      fontSize: 14,
      fontWeight: "inherit",
    },
  },
  palette: {
    background: {
      default: "#0A1929",
    },
    text: {
      primary: "white",
    },
    primary: {
      main: "#FFE462",
      contrastText: "#0A1929",
    },
    secondary: {
      main: "#FFF",
    },
  },
  components: {
    MuiDivider: {
      defaultProps: {
        color: "#132f4c",
      },
      styleOverrides: {
        root: {
          opacity: 0.4,
          borderWidth: 1,
        },
      },
    },
  },
});

export default theme;
