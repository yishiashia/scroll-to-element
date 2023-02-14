const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.ts",
  output:{
    path: path.resolve(__dirname, 'dist'),
    library: 'scroll-to-element',
    libraryTarget: 'umd',
    filename: (pathData) => {
      return pathData.chunk.name === 'main' ? 'scroll-to-element.js' : 'scroll-to-element.[name].js';
    },
    globalObject: 'this',
    umdNamedDefine: true
  },
  mode: "production",
  devServer: {
    compress: true,
    open: true,
  },
  devtool: "source-map",
  plugins: [],
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: __dirname + '/src',
        loader: 'babel-loader',
        options: {
          presets: ['@babel/typescript', '@babel/preset-env'],
        }
      },
    ],
  },
};
