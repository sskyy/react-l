var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css?$/,
      loaders: [ 'style', 'raw' ],
      include: __dirname
    }]
  }
}


// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
var librarySrc = path.join(__dirname, '..', '..', 'src')
var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var moduleName = require('../../package.json').name
var fs = require('fs')
if (fs.existsSync(librarySrc) && fs.existsSync(reduxNodeModules)) {

  module.exports.resolve = { alias: { [ moduleName ]: librarySrc } }

  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: [ 'babel' ],
    include: librarySrc
  })
}