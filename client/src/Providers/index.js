import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AppThemeProvider } from './ThemeProvider';

const queryClient = new QueryClient();

export const AppProviders = ({ children }) => <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </AppThemeProvider>;
