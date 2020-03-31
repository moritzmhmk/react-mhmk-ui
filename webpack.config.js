const path = require('path')

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[name]_[local]_[hash:base64:5]'
    }
  }
}

const reactSVGLoader = {
  loader: 'react-svg-loader',
  options: {
    jsx: true // true outputs JSX tags
  }
}

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  externals: [
    'react'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', cssLoader]
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', reactSVGLoader]
      }
    ]
  }
}
