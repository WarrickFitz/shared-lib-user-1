const path = require('path');
const { env } = require('process');

module.exports = (env, argv) => {

  return {entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
            loader:'ts-loader',
            options: {projectReferences: true}
          }],
        exclude: [
          /node_modules/
        ],        
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    fallback: {
        "electron": false,
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },
  devtool: 'cheap-module-source-map',
  target: ["node"],
  mode: 'development'
}
};
