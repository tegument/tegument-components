import React from 'react'
import IconButton from '../IconButton'
import { css, withStyles } from '../theme'
import icons from '../theme/icons'

const styles = theme => ({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: theme.metrics.bottomNav.height,
    width: '100%',
    display: 'flex',
    flex: 1,
    margin: 0,
    flexDirection: 'row',
    background: 'white',
    zIndex: 1000,
    padding: 10,
    boxShadow: theme.boxShadow
  },
  title: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: '1.25rem'
  },
  button: {
    margin: 0,
    padding: 0
  }
})

export const NavBar = ({ css, styles, title, leftIcon, rightIcon, onLeftButtonClick, onRightButtonClick }) => (
  <div {...css(styles.root)}>
    <IconButton icon={icons[leftIcon]} {...css(styles.button)} onClick={onLeftButtonClick} />
    <div {...css(styles.title)}>{title}</div>
    <IconButton icon={icons[rightIcon]} {...css(styles.button)} onClick={onRightButtonClick} />
  </div>
)

export default withStyles(styles)(NavBar)
