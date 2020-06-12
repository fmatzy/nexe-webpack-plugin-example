const { NexePlugin } = require('nexe-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: './entry.js',
  output: {
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    new NexePlugin({
      output: 'sample-bin',
    }),
  ],
};
