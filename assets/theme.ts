import { Theme } from '@emotion/react';

export default {
  colors: {
    brand: {
      primary: '#5D74F9',
      secondary: '#4FB0E2',
      tertiary: '#52D1CF',
    },
    alert: {
      success: '#5BE48F',
      warning: '#FFA655',
      danger: '#E25450'
    },
    neutral: {
      ultraDark: '#000000',
      dark: '#515151',
      medium: '#878787',
      light: '#CCCCCC',
      ultraLight: '#FFFFFF'
    }
  },
  fonts: {
    default: 'Roboto',
    brand: 'Advent Pro',
  },
  space: [0, 4, 8, 16, 32, 40, 48, 64, 72, 80, 88, 128, 256, 512]
} as Theme;
