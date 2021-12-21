import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'

const themes = {
  light: {
    themeName: 'light',
    colors: {
      secondary:'rgba(0,0,0,.75)',
      primary: colors.blue,
      text: colors.black,
      bodyBg: colors.gray,
      headerBg: colors.blue,
      link: colors.blue,
      ...colors,
    },
  },
  default: {
    themeName: 'default',
    colors: {
      primary: lighten(0.05, colors.blue),
      secondary:'hsla(0,0%,100%,.45)',
      text: colors.white,
      bodyBg: colors.black,
      headerBg: colors.black,
      link: lighten(0.05, colors.blue),
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      secondary:'hsla(0,0%,100%,.45)',
      primary: lighten(0.05, colors.blue),
      text: colors.white,
      bodyBg: colors.black,
      headerBg: colors.black,
      link: lighten(0.05, colors.blue),
      ...colors,
    },
  },

}

const returnRespectiveTheme = function(){
  if(typeof window !== 'undefined'){
    return themes[window.localStorage.getItem('theme')]
  } else {
    return themes['default']
  }

}

const { ThemeProvider, withTheme, useTheme } = createTheming(returnRespectiveTheme());

export { ThemeProvider, withTheme, useTheme, themes, colors }
