const path = require('path');
const { env } = require('process');

module.exports = (env, argv) => {

  return {entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader','ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    fallback: 
      { 
        // "util": false, 
        // "assert": false,
        // "events" : false,
        // "https": false,
        // "http": false,
        // "url": false,
        // "crypto": false,
        // "stream": false,
        // "querystring": false,
        // "path": false,
        // "zlib": false,
        // "net": false,
        // "tls": false,
        // "fs": false,
        // "buffer": false
      }
    
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: ["web"],
  mode: 'development',
  //mode: 'production',
  optimization: {
    usedExports: true,
    concatenateModules: true,
    providedExports: true,
    // splitChunks: {
    //   chunks: 'all',
    // },
  }
}
};
