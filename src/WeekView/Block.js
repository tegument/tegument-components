import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, css, rowHeight, border } from '../theme'

const styles = theme => ({
  root: {
    boxSizing: theme.boxSizing,
    position: 'relative',
    borderRight: theme.border,
    borderBottom: theme.border
  },
  button: {
    boxSizing: theme.boxSizing,
    fontFamily: 'arial, sans-serif',
    fontSize: '12px',
    WebkitAppearance: 'none',
    width: '100%',
    height: '100%',
    border: 0,
    outline: 0
  },
  event: {
    boxSizing: theme.boxSizing,
    fontFamily: 'arial, sans-serif',
    fontSize: '10px',
    background: '#000',
    color: '#fff',
    position: 'absolute',
    width: '100%',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    borderTop: theme.border,
    top: -1,
    left: 0,
    zIndex: 100
  }
})

const BlockComponent = ({ css, styles, time, date, onClick, height, events, increment }) => {
  return (
    <div {...css(styles.root)} style={{ height }}>
      <button
        {...css(styles.button)}
        onClick={() => onClick({ time, date })}>
        {events.map((e, i) => (
          <div key={`${date}_${time}_${e.name}_${i}`} {...css(styles.event)} style={{
            height: height * e.length / increment,
            background: e.background,
            color: e.color || 'white',
            width: `${100 / events.length}%`,
            left: `${(100 / events.length * i)}%`,
            borderLeft: (i > 0) ? border : null
          }}>
            <div>{e.name}</div>
            <div>{e.start} - {e.end}</div>
          </div>
        ))}
      </button>
    </div>
  )
}

BlockComponent.propTypes = {
  date: PropTypes.number,
  time: PropTypes.string,
  onClick: PropTypes.func,
  height: PropTypes.number,
  events: PropTypes.array,
  increment: PropTypes.number
}

export default withStyles(styles)(BlockComponent)
