import React from 'react'
import PropTypes from 'prop-types'
import { range } from 'lodash'
import { compose, withHandlers, withStateHandlers, pure, lifecycle } from 'recompose'
import Block from './Block'
import Column from './Column'
import { withStyles, css, rowHeight, metrics } from '../theme'
import { prettyTime, dateDDMMYYY, getNextDay, getPrevDay } from './utils'
import NavBar from '../NavBar'

const styles = theme => ({
  root: {
    boxSizing: theme.boxSizing,
    position: 'relative',
    paddingBottom: theme.metrics.bottomNav.height,
    height: '100%'
  },
  columnContainer: {
    boxSizing: theme.boxSizing,
    fontFamily: 'arial, sans-serif',
    fontSize: '12px',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    borderLeft: theme.border,
    borderTop: theme.border,
    textAlign: 'center',
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  prefixCol: {
    borderRight: theme.border,
    borderBottom: theme.border,
    position: 'relative',
    boxSizing: theme.boxSizing,
    height: theme.rowHeight,
    lineHeight: `${theme.rowHeight}px`
  },
  weekContainer: {
    boxSizing: theme.boxSizing,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center'
  },
  weekColumnOverflow: {
    width: '100%'
  }
})

let ms = 24 * 60 * 60 * 1000

const prefixColWidth = 75

const WeekView = props => {
  const {
    css,
    styles,
    events,
    day,
    start,
    stop,
    height,
    width,
    increment,
    renderBlock,
    renderColumn,
    handleBlockClick,
    handleMouseOver,
    prevPage,
    nextPage,
    page,
    columns,
    viewType
  } = props

  let startMs = day.getTime()

  return (
    <div {...css(styles.root)}>
      <div {...css(styles.columnContainer)}>
        {renderColumn({
          header: 'Time:',
          start,
          stop,
          increment,
          renderBlock: ({ time }) => (
            <div key={time} {...css(styles.prefixCol)}>{prettyTime(time)}</div>
          ),
          width: prefixColWidth
        })}
        <div {...css(styles.weekColumnOverflow)}>
          <div {...css(styles.weekContainer)}>
            {range(columns).map((c, i) => renderColumn({
              key: c,
              date: new Date(day.getTime() + ms * i),
              start,
              stop,
              events,
              increment,
              renderBlock,
              width: `${100 / columns}%`,
              handleBlockClick
            }))}
          </div>
        </div>
      </div>
      <NavBar
        title={dateDDMMYYY(day)}
        leftIcon={'Left'}
        rightIcon={'Right'}
        onLeftButtonClick={prevPage}
        onRightButtonClick={nextPage}
      />
    </div>
  )
}

WeekView.defaultProps = {
  start: 6,
  stop: 21,
  increment: 30,
  renderColumn: props => (<Column {...props} />),
  renderBlock: props => (<Block {...props} />),
  handleBlockClick: d => console.log(d)
}

WeekView.propTypes = {
  css: PropTypes.func,
  styles: PropTypes.object,
  events: PropTypes.array,
  start: PropTypes.number,
  stop: PropTypes.number,
  increment: PropTypes.number,
  renderColumn: PropTypes.func,
  renderBlock: PropTypes.func,
  handleBlockClick: PropTypes.func
}

export default compose(
  withStyles(styles),
  withStateHandlers(
    props => ({
      day: new Date(),
      page: 1,
      colsPerPage: 1,
      columns: 1,
      viewType: 'day'
    }),
    ({
      setPage: () => page => ({ page }),
      nextPage: ({ page, colsPerPage, day }) => () => ({
        page: page + colsPerPage,
        day: getNextDay(day, colsPerPage)
      }),
      prevPage: ({ page, colsPerPage, day }) => () => ({
        page: (page === 1) ? 1 : page - colsPerPage,
        day: getPrevDay(day, colsPerPage)
      }),
      setColumns: () => columns => ({ columns }),
      setColsPerPage: () => colsPerPage => ({ colsPerPage }),
      setViewType: () => viewType => ({ viewType })
    })
  ),
  lifecycle({
    componentDidMount () {
      const { setColumns, setColsPerPage, setViewType } = this.props
      if (window.innerWidth < 640) {
        setColumns(1)
        setColsPerPage(1)
        setViewType('day')
      } else {
        setColumns(7)
        setColsPerPage(7)
        setViewType('week')
      }
      window.addEventListener('resize', () => {
        if (window.innerWidth < 640) {
          setColumns(1)
          setColsPerPage(1)
          setViewType('day')
        } else {
          setColumns(7)
          setColsPerPage(7)
          setViewType('week')
        }
      })
    },
    componentWillUnmount () {
      window.remoteEventListener('resize')
    }
  }),
  pure
)(WeekView)
