// import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'
// import aphroditeInterface from 'react-with-styles-interface-aphrodite/no-important'
// import { css, withStyles } from 'react-with-styles'
// import icons from './icons'
// import Theme, {
//   metrics,
//   border,
//   boxSizing,
//   rowHeight,
// } from './theme'
// ThemedStyleSheet.registerTheme(Theme)
// ThemedStyleSheet.registerInterface(aphroditeInterface)

// export {
//   css,
//   withStyles,
//   ThemedStyleSheet,
//   metrics,
//   border,
//   boxSizing,
//   rowHeight,
//   icons
// }

import icons from './icons'

export const metrics = {
  topNav: {
    height: 80
  },
  bottomNav: {
    height: 80
  }
}

export const border = '1px solid #000'
export const boxSizing = 'border-box'
export const rowHeight = 30

export default {
  metrics,
  border,
  boxSizing,
  rowHeight,
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.42), 0 0 10px 0 rgba(0, 0, 0, 0.12), 0 0 10px 0 rgba(0, 0, 0, 0.2)',
  color: {
    header: 'red',
    background: 'gray',
    primary: '#FF5A5F',
    secondary: '#00A699'
  },
  icons
}
