const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/landing.tsx',
  output: {
    path: path.join(__dirname, '/static/build/'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/typescript', '@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    publicPath: '/static/build/',
    hot: true,
    open: true,
    openPage: '/static/build'
  },
  watchOptions: {
    poll: 1000
  },
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*'
      }
    })
  ]
}
