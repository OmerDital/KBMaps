import React, { useContext, createContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import initialState from './initial.theme';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';

const ThemeContext = createContext(initialState);

export const ApolloThemeProvider = props => {
	const theme = createTheme(initialState);
	const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

	const { children } = props;

	return (
		<ThemeContext.Provider
			value={{
				theme,
			}}
			{...props}>
			<StylesProvider jss={jss}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</StylesProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
