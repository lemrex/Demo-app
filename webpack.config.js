const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      crypto: require.resolve("browserify-crypto"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      querystring: require.resolve("querystring-es3"), 
      url: require.resolve("url/") ,
      util: require.resolve("util/"),
      fs
    },
      externals: {
      express: require("express"),
      on-finished: require("on-finished"),
      raw-body: require("raw-body"),
      browserify-zlib: require("browserify-zlib"),
      destroy: require("destroy"),
      etag:require("etag"),
      mime:require("mime"),
      send: require("send"),
    },
  },
 plugins: [
    new webpack.ProvidePlugin({
      fs: 'fs-extra',
    })
  ]
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

