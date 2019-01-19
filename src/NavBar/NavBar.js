import React from 'react'
import IconButton from '../IconButton'
import { metrics, boxShadow } from '../theme'
import icons from '../theme/icons'

const styles = {
  root: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    height: metrics.bottomNav.height,
    width: '100%',
    display: 'flex',
    flex: 1,
    margin: 0,
    flexDirection: 'row',
    background: 'white',
    zIndex: 1000,
    padding: 10,
    boxShadow: boxShadow
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
}

export const NavBar = ({ style, title, leftIcon, rightIcon, onLeftButtonClick, onRightButtonClick }) => (
  <div style={{ ...styles.root, ...style }}>
    <IconButton style={styles.button} icon={icons[leftIcon]} onClick={onLeftButtonClick} noOutline />
    <div style={styles.title}>{title}</div>
    <IconButton style={styles.button} icon={icons[rightIcon]} onClick={onRightButtonClick} noOutline />
  </div>
)

export default NavBar
