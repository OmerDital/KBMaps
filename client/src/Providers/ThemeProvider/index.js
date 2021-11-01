import React, { useContext, createContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import initialState from './initial.theme';

const ThemeContext = createContext(initialState);

export const AppThemeProvider = props => {
  const theme = createTheme(initialState);
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin]
  });

  const { children } = props;

  return (
    <ThemeContext.Provider
      value={{
        theme
      }}
      {...props}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
