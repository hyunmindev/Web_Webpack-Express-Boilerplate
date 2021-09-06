const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { NODE_ENV } = process.env;

module.exports = {
  entry: [
    path.resolve(__dirname, 'public/javascripts/index.js'),
    path.resolve(__dirname, 'public/stylesheets/style.scss'),
  ],
  output: {
    filename: 'javascripts/index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  mode: NODE_ENV,

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          name: 'assets/[hash].[ext]',
          limit: 1024,
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'stylesheets/style.css' }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
