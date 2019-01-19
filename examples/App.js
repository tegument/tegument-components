import React, { Component } from 'react'
import WeekView from '../src/WeekView/index.js'
import { events } from './constants'

class App extends Component {
  render () {
    return (
      <WeekView
        width={'100%'}
        height={'100%'}
        events={events}
        responsive={true}
        mobileBreakPoint={640}
        desktopColumns={7}
        mobileColumns={2}
        handleBlockClick={block => console.log(`Selected: ${block}`)}
      />
    )
  }
}

export default App
