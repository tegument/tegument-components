import React from 'react'
import PropTypes from 'prop-types'
import icons from '../theme/icons'
const styles = {
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
    opacity: 0.7,
    transition: 'opacity .2s'
  }
}

export const IconButton = ({ style, width, height, onClick, icon, noOutline, iconWidth, iconHeight }) => {
  const iconStyle = noOutline
    ? { border: 0 }
    : {}
  iconStyle.width = width
  iconStyle.height = height
  return (
    <button
      style={{ ...styles.button, ...iconStyle, ...style }}
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
  onClick: PropTypes.func,
  icon: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  noOutline: PropTypes.bool
}

export default IconButton
