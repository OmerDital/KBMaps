import lightTheme from './light.theme';

export const INITIAL_PALETTE_TYPE = 'light';

export default {
  direction: 'rtl',
  palette: {},
  ...lightTheme,
  typography: {
    fontFamily: 'Rubik',
    button: {
      textTransform: 'none'
    }
  }
};
