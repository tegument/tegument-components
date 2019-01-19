import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, css, icons } from '../theme'

const styles = ({ color }) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    appearance: 'none',
    width: '60px',
    height: '60px',
    margin: 0,
    padding: 0,
    border: '1px solid #000',
    borderRadius: 30,
    background: 'white',
    outline: 'none',
    opacity: 0.7, /* Set transparency (for mouse-over effects on hover) */
    transition: 'opacity .2s'
    // ':hover': {
    //   opacity: 1
    // }
  }
})

export const IconButton = ({ styles, style, width, height, onClick, icon, noOutline, iconWidth, iconHeight }) => {
  const iconStyle = noOutline
    ? { border: 0 }
    : {}
  iconStyle.width = width
  iconStyle.height = height
  return (
    <button
      {...css(styles.button)}
      style={{ ...iconStyle, ...style }}
      onClick={onClick}
    >
      <img src={icon} width={iconWidth} height={iconHeight} />
    </button>
  )
}

IconButton.defaultProps = {
  onClick: () => { },
  icon: icons['MenuIcon'],
  width: 60,
  height: 60,
  iconWidth: 40,
  iconHeight: 40,
  style: {}
}

IconButton.propTypes = {
  styles: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  noOutline: PropTypes.bool
}

export default withStyles(styles)(IconButton)
