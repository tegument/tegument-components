import React from 'react'
import PropTypes from 'prop-types'
import { boxSizing, border } from '../theme'

const styles = {
  columnHeader: {
    boxSizing: boxSizing,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: border,
    borderBottom: border
  }
}

const ColumnHeader = ({ title }) => (
  <div style={styles.columnHeader}>
    <div>{title}</div>
  </div>
)

export default ColumnHeader
