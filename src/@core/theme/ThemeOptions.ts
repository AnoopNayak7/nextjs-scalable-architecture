import { deepmerge } from '@mui/utils';
import { ThemeOptions } from '@mui/material';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import UserThemeOptions from '../../layouts/UserThemeOptions';
import breakpoints from './breakpoints';

const themeOptions = (): ThemeOptions => {
  // ** Create New object before removing user component overrides and typography objects from userThemeOptions
  const userThemeConfig: any = Object.assign({}, UserThemeOptions());

  const userFontFamily = userThemeConfig.typography?.fontFamily;

  const mergedThemeConfig = deepmerge({
    palette: palette(mode === 'semi-dark' ? 'light' : mode),
    typography: {
      fontFamily:
        userFontFamily ||
        [
          'Public Sans',
          'sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
    },
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 6,
    },
    userThemeConfig,
  });

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        ...mergedThemeConfig.palette[themeColor],
      },
    },
  });
};

export default themeOptions;
