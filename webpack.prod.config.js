const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    main: './src/client/index.tsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'web',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'ts-loader',
            }
        },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [{loader: 'url-loader'}]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: './postcss.config.js',
              },
            }
        }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: './src/client/index.html',
        filename: './index.html',
        excludeChunks: [ 'server' ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}