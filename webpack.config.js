const { NexePlugin } = require('nexe-webpack-plugin');
const { join } = require('path');

module.exports = {
  mode: 'development',
  entry: join(__dirname, 'entry.js'),
  output: {
    path: join(__dirname, 'build'),
  },
  plugins: [
    new NexePlugin({
      output: 'sample-bin',
    }),
  ],
};
