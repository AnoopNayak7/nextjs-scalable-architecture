import { ReactNode } from 'react';

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  Theme,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils'
import CssBaseline from '@mui/material/CssBaseline'

import themeConfig from '../../configs/themeConfig';
import UserThemeOptions from '../../layouts/UserThemeOptions'
import overrides from './overrides'
import typography from './typography'

interface Props {
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {

  const {children} = props

  let theme = createTheme(themeConfig);

  const mergeComponentsOverrides = (theme: Theme) => deepmerge({ ...overrides(theme)}, UserThemeOptions()?.typography)

  const mergeTypography = (theme: Theme) => deepmerge(typography(theme), UserThemeOptions()?.typography)

  theme = createTheme(theme, {
    components: { ...mergeComponentsOverrides(theme) },
    typography: { ...mergeTypography(theme) }
  })

  if(themeConfig.responsiveFontSizes){
    theme = responsiveFontSizes(theme)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
