const path = require('path');

const defaults = {
  entry: './src/js/index.ts',
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: ["ts-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: "./main.js.map",
    filename: 'main.js'
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    defaults.devtool = 'source-map';
  }
  return defaults;
};
