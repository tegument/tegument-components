/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path')

module.exports = {
  title: 'tegument-components',
  styleguideDir: path.join(__dirname, 'styleguide'),
  exampleMode: 'expand',
  usageMode: 'expand',
  showSidebar: true,
  serverPort: 8080,
  compilerConfig: {
    transforms: { dangerousTaggedTemplateString: true },
    objectAssign: 'Object.assign'
  },
  sections: [
    {
      name: '',
      content: 'readme.md'
    },
    {
      name: 'WeekView',
      content: './src/WeekView/readme.md',
      components: './src/WeekView/WeekView.js'
    }
  ]
}
