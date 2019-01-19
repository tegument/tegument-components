import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, css } from '../theme'

const styles = ({ color }) => ({
  button: {
    boxSizing: 'border-box',
    appearance: 'none',
    width: '60px',
    height: '30px',
    margin: 15,
    padding: 10,
    border: 'none',
    background: 'white',
    outline: 'none',
    opacity: 0.7, /* Set transparency (for mouse-over effects on hover) */
    transition: 'opacity .2s',
    fontFamily: 'Roboto, Arial, sans-serif',
    textTransform: 'uppercase'
    // ':hover': {
    //   opacity: 1
    // }
  }
})

export const Button = ({ styles, style, propStyles, onClick, label }) => {
  return (
    <button
      {...css([ styles.button, propStyles ])}
      style={style}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => { },
  label: 'Button Label'
}

Button.propTypes = {
  styles: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  label: PropTypes.string
}

export default withStyles(styles)(Button)
