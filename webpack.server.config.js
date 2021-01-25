const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (_env) => {
  return ({
    entry: {
      server: './src/server/server.ts',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'ts-loader',
            }
        },
      ]
    }
  })
}
