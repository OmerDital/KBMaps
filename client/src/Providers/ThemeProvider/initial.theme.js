import lightTheme from './light.theme';

export const INITIAL_PALETTE_TYPE = 'light';

export default {
	direction: 'rtl',
	palette: {},
	...lightTheme,
	typography: {
		fontFamily: "'Open Sans', Roboto, sans-serif",
		button: {
			textTransform: 'none',
		},
	},
};
