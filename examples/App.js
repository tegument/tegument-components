import React, { Component } from 'react'
import WeekView from '../src/WeekView/index.js'
import { events } from './constants'

class App extends Component {
  render () {
    return (
      <WeekView events={events} />
    )
  }
}

export default App
