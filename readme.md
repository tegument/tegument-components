# tegument-compontents

[![npm](https://img.shields.io/npm/v/tegument-compontents.svg)](https://www.npmjs.com/package/tegument-compontents)
[![Build Status](https://travis-ci.org/tegument/tegument-compontents.svg?branch=master)](https://travis-ci.org/tegument/tegument-compontents)
[![codecov](https://codecov.io/gh/tegument-compontents/tegument-compontents/branch/master/graph/badge.svg)](https://codecov.io/gh/tegument-compontents/tegument-compontents)

Documentation and examples: https://tegument-compontents.js.org

Source code: https://github.com/tegument/tegument-compontents/

## Installation

Install it from npm and include it in your React build process (using [Webpack](http://webpack.github.io/), [Browserify](http://browserify.org/), etc).

```bash
npm install --save tegument-compontents
```
or:
```bash
yarn add tegument-compontents
```

## Usage

```javascript static
import React, { Component } from 'react'
import ImageEditor from 'tegument-compontents'

const height = 667
const width = 375

class App extends Component {
  handleRenderedImage (image) {
    // image result is base64
  }
  render () {
    return (
      <ImageEditor
        height={height}
        width={width}
        container={{
          width: width,
          height: width
        }}
        onImageRendered={this.handleRenderedImage}
      />
    )
  }
}

export default App
```

## PropTypes

See https://tegument-compontents.js.org/#proptypes

## License

MIT
