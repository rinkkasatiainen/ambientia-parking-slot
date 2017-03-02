var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
      'babel-polyfill',
      'webpack-hot-middleware/client',
      './src/index.js'
    ] ,
    output: {
          path: path.join(__dirname, 'public'),
          filename: 'bundle.js'
        },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), 
      new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
    rules: [
      // js
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": [
                [ "es2015", { "modules": false } ],
                "stage-2",
                "react"
              ],
            }
          }
        ]
      },
      // images
      {
        test: /\.(jpe?g|png)$/,
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        use: [
          'file-loader'
        ]

      },
      // CSS
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader?sourceMap?',
        ]
      },
      // SCSS
      {
        test: /\.scss/,
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader?sourceMap?',
          'sass-loader?sourceMap'
        ]
      }
    ]
  } 
};

