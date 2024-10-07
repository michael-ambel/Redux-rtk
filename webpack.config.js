const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'dist'),  // Serve files from the 'dist' directory
        port: 9000,   // Port where the dev server will run (localhost:9000)
        open: true,   // Automatically open the browser
        hot: true,    // Enable Hot Module Replacement (HMR) for live reloading
      },
  };