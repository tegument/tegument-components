import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, css, rowHeight } from '../theme'

const styles = theme => ({
  columnHeader: {
    boxSizing: theme.boxSizing,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: theme.border,
    borderBottom: theme.border
  }
})

const ColumnHeader = ({ css, styles, title }) => (
  <div {...css(styles.columnHeader)}>
    <div>{title}</div>
  </div>
)

export const withStyles(styles)(ColumnHeader)
