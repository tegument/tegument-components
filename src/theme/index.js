import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'
import aphroditeInterface from 'react-with-styles-interface-aphrodite/no-important'
import { css, withStyles } from 'react-with-styles'
import icons from './icons'
import Theme, {
  metrics,
  border,
  boxSizing,
  rowHeight,
} from './theme'
ThemedStyleSheet.registerTheme(Theme)
ThemedStyleSheet.registerInterface(aphroditeInterface)

export {
  css,
  withStyles,
  ThemedStyleSheet,
  metrics,
  border,
  boxSizing,
  rowHeight,
  icons
}
