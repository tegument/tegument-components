import React from 'react'
import PropTypes from 'prop-types'
import { rowHeight, border, boxSizing } from '../theme'

const styles = {
  root: {
    boxSizing: boxSizing,
    position: 'relative',
    borderRight: border,
    borderBottom: border
  },
  button: {
    boxSizing: boxSizing,
    fontFamily: 'arial, sans-serif',
    fontSize: '12px',
    WebkitAppearance: 'none',
    width: '100%',
    height: '100%',
    border: 0,
    outline: 0
  },
  event: {
    boxSizing: boxSizing,
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
    borderTop: border,
    top: -1,
    left: 0,
    zIndex: 100
  }
}

const BlockComponent = ({ time, date, onClick, height, events, increment }) => {
  return (
    <div style={{ ...styles.root, height }}>
      <button
        style={styles.button}
        onClick={() => onClick({ time, date })}>
        {events.map((e, i) => (
          <div key={`${date}_${time}_${e.name}_${i}`} style={{
            ...styles.event,
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

export default BlockComponent
