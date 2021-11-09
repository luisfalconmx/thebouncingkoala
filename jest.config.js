const path = require('path')

module.exports = {
  setupFilesAfterEnv: [path.resolve(__dirname, 'src/setupTests.js')],
  testEnvironment: 'jsdom'
}
