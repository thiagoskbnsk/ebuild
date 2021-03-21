import { ThemeProvider } from '@emotion/react'
import { Global } from '@emotion/react'

import { GlobalStyle } from '../assets/global';
import theme from '../assets/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
