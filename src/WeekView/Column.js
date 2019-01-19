import React from 'react'
import PropTypes from 'prop-types'
import { range, filter } from 'lodash'
import { dateDDMMYYY, getDayOfWeek } from './utils'
import { rowHeight, boxSizing, border } from '../theme'

const styles = {
  columnHeader: {
    boxSizing: boxSizing,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: border,
    borderBottom: border,
    height: rowHeight * 2
  },
  column: {
    height: '100%'
  },
  blockContainer: {

  }
}

const getColumn = (start, stop, increment) => {
  const blocks = ((stop - start) * 60) / increment
  let hour = start
  let minutes = 0
  let column = []
  range(blocks).map(block => {
    column.push(`${hour}:${(minutes < 10) ? `0${minutes}` : minutes}`)
    minutes += increment
    if (minutes === 60) {
      hour += 1
      minutes = 0
    }
  })
  return column
}

const Column = props => {
  const { height, width, hideHeader, date, start, stop, increment, events, renderBlock, handleBlockClick } = props
  const column = getColumn(start, stop, increment)
  return (
    <div style={{ ...styles.column, width }}>
      {
        (!hideHeader && (
          <div style={styles.columnHeader}>
            <div>{getDayOfWeek(date)}</div>
            {date && (<div>{dateDDMMYYY(date)}</div>)}
          </div>
        ))
      }
      <div style={styles.blockContainer}>
        {
          column.map((b, idx) => renderBlock({
            key: `${b}_${idx}`,
            time: b,
            date: date && new Date(date).setHours(b.split(':')[0], b.split(':')[1], 0) || null,
            onClick: handleBlockClick,
            height: rowHeight,
            events: date && filter(events, e => e.days.indexOf(getDayOfWeek(date)) > -1 && e.start === b),
            increment
          }))
        }
      </div>
    </div>
  )
}

Column.propTypes = {
  header: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.object,
  start: PropTypes.number,
  stop: PropTypes.number,
  increment: PropTypes.number,
  renderBlock: PropTypes.func,
  handleBlockClick: PropTypes.func
}

export default Column
