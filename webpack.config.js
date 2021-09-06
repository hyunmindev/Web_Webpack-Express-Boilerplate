const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'public/javascripts/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/javascripts'),
  },
};
