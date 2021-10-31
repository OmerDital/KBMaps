import React from 'react';
import { ApolloThemeProvider } from './ThemeProvider';

export const AppProviders = ({ children }) => <ApolloThemeProvider>{children}</ApolloThemeProvider>;
