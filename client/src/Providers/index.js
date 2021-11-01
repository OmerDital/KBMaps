import React from 'react';
import { AppThemeProvider } from './ThemeProvider';

export const AppProviders = ({ children }) => <AppThemeProvider>{children}</AppThemeProvider>;
