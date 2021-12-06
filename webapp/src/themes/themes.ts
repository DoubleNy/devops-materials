import { createTheme } from "@mui/material";

export const BLUE = "#0A1929";
export const DIVIDER_BLUE = "#132f4c";
export const LIGHT_BLUE = "#a5d8ff";
export const LIST_BACKGROUND = "#173a5e";
export const CODE_BACKGROUND = "#001e3c";
export const LINK_BLUE = "#66b2ff";

const theme = createTheme({
  spacing: 4,
  typography: {
    htmlFontSize: 14,
    fontSize: 12,
    body1: {
      fontSize: 14,
    },
    subtitle1: {
      fontSize: 16,
      letterSpacing: 0.5,
      fontWeight: 900,
    },
    h1: {
      fontSize: 24,
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
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: LIST_BACKGROUND,
        },
      },
    },
    MuiList: {
      defaultProps: {
        color: LIGHT_BLUE,
      },
      styleOverrides: {
        root: {
          // backgroundColor: LIST_BACKGROUND,
        },
      },
    },
    MuiDivider: {
      defaultProps: {
        color: "#132f4c",
      },
      styleOverrides: {
        root: {
          opacity: 0.3,
          borderWidth: 1,
        },
      },
    },
    MuiTypography: {
      defaultProps: {},
      styleOverrides: {
        root: {},
        h1: {
          fontSize: 30,
          fontWeight: 800,
        },
        h2: {
          fontSize: 24,
          fontWeight: 600,
        },
        h3: {
          fontSize: 22,
          fontWeight: 600,
        },
        subtitle1: {
          fontsize: 16,
          fontWeight: 600,
        },
        body1: {
          fontsize: 14,
        },
      },
    },
  },
});

export default theme;
