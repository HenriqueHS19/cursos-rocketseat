module.exports = {
  //entry: "./modulo-02/main.js",
  entry: [
            "@babel/polyfill",
            //"./modulo-03/src/main.js"
            "./modulo-04/src/main.js"
          ],
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  devServer: {
    //contentBase: __dirname + '/modulo-02'
    //contentBase: __dirname + '/modulo-03'
    contentBase: __dirname + '/modulo-04'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ],
  },
};
