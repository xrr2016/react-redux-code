const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: '/dist/assets',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  context: path.resolve(__dirname, 'exercise_files'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        options: {presets: ['latest']}
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.scss$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    compress: true,
    contentBase: path.join(__dirname, 'exercise_files/dist'),
    port: 8000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
