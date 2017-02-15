let path = require('path');
let LiveReloadPlugin = require('webpack-livereload-plugin');
let webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let config = {
  entry: {
    main: './src/index.tsx',
    vendor: [ 'glamor' ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/'
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  module: {
    //noParse: [/react/, /react-dom/],
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: /src/,
        exclude: /node_modules/
      }
    ]
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    hot: true
  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   compress: {
    //     warnings: false,
    //     screw_ie8: true,
    //     conditionals: true,
    //     unused: true,
    //     comparisons: true,
    //     sequences: true,
    //     dead_code: true,
    //     evaluate: true,
    //     if_return: true,
    //     join_vars: true
    //   }
    // }),
    new LiveReloadPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    }),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  }
};

module.exports = config;
