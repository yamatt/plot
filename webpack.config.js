const path = require('path');

const defaults = {
  entry: './src/js/index.ts',
  devtools: 'source-map',
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
  return defaults;
};
