import React from 'react'
import PropTypes from 'prop-types'
import { range, filter } from 'lodash'
import { dateDDMMYYY } from './utils'
import BlockComponent from './BlockComponent'
import { colors, events, days } from '../constants'

const border = '1px solid #000'
const boxSizing = 'border-box'
const rowHeight = 20

const styles = {
  root: {
    boxSizing,
    fontFamily: 'arial, sans-serif',
    fontSize: '12px',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    borderLeft: border,
    borderTop: border,
    textAlign: 'center'
  },
  columnHeader: {
    boxSizing,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: border,
    borderBottom: border,
    height: rowHeight * 2,
    background: colors.header,
    color: 'white'
  },
  timeColumnBlock: {
    boxSizing,
    borderRight: border,
    borderBottom: border,
    height: rowHeight,
    lineHeight: rowHeight + 'px'
  },
  column: {
    boxSizing,
    display: 'flex',
    flexDirection: 'column',
    width: `${100 / 8}%`
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

let ms = 24 * 60 * 60 * 1000

const WeekView = props => {
  const {
    startDate,
    start,
    stop,
    increment,
    renderBlockComponent,
    renderTimeColumn,
    handleBlockClick,
    handleMouseOver
  } = props
  const column = getColumn(start, stop, increment)
  let startMs = startDate.getTime()
  return (
    <div style={styles.root}>
      <div style={styles.column}>
        <div style={styles.columnHeader}>
          <div>Time:</div>
        </div>
        {
          column.map((b, idx) => (<div style={styles.timeColumnBlock}>{b}</div>))
        }
      </div>
      {days.map((day, i) => {
        const date = new Date(startMs + (ms * i))
        return (
          <div key={`${day}_${i}`} style={styles.column}>
            <div style={styles.columnHeader}>
              <div>{day}</div>
              <div>{dateDDMMYYY(date)}</div>
            </div>
            {
              column.map((b, idx) => renderBlockComponent({
                time: b,
                date: new Date(date).setHours(b.split(':')[0], b.split(':')[1], 0),
                onClick: handleBlockClick,
                onMouseOver: handleMouseOver,
                height: rowHeight,
                events: filter(events, e => e.days.indexOf(day) > -1 && e.start === b),
                increment
              }))
            }
          </div>
        )
      })}
    </div>
  )
}

WeekView.defaultProps = {
  startDate: new Date('1-14-2019'),
  start: 6,
  stop: 21,
  increment: 30,
  renderBlockComponent: props => (<BlockComponent {...props} />),
  handleBlockClick: d => console.log(d),
  handleMouseOver: d => console.log(d)
}

WeekView.propTypes = {
  startDate: PropTypes.object,
  start: PropTypes.number,
  stop: PropTypes.number,
  increment: PropTypes.number,
  renderBlockComponent: PropTypes.func,
  renderTimeColumn: PropTypes.func,
  handleBlockClick: PropTypes.func
}

export default WeekView
