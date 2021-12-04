import createCache from "@emotion/cache";
import { CacheProvider, Global } from "@emotion/react";
import React from "react";
import { AppStyles } from "../themes/app-styles";
import theme from "../themes/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";

const APP_KEY = "devops-teaching-materials";

const cache = createCache({ key: APP_KEY });

export const ThemeContext: React.FC = ({ children }) => (
  <CacheProvider value={cache}>
    <Global styles={AppStyles} />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </CacheProvider>
);
