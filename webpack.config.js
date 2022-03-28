var path = require('path')

module.exports = {
  target: "node",
  entry: ['./index'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scrollToElement.js',
    library: 'scroll',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  }
}
