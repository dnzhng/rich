var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS', process.env.CONTINUOUS_INTEGRATION ? '' : 'Chrome' ], //run in only phantom on CI
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    colors: true,
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ], //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'mocha', 'coverage' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          { test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ],
        postLoaders: [
          {
            test: /\.js$/,
            exclude: /(test|node_modules|bower_components)\//,
            loader: 'istanbul-instrumenter'
          }
        ]
      },
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },
    },
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-mocha-reporter',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-firefox-launcher'
    ],
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    coverageReporter: {
      dir: '../coverage/',
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'text'}
      ]
    }
  });
};
