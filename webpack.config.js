const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      node-core-modules: require.resolve("node-core-modules"),
      zlib: require.resolve("browserify-zlib"),
      crypto: require.resolve("browserify-crypto"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      querystring: require.resolve("querystring-es3"), 
      url: require.resolve("url/") ,
      util: require.resolve("util/"),
    },
  },
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'source-map',
  node: {
	__dirname:false,
        __filename: false,
  },
};

