var webpack = require('webpack');
var path = require('path');

var config = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
          path: path.join(__dirname, 'public'),
          filename: 'bundle.js'
        },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), 
      new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
      rules: [{
        test : /\.jsx?$/, 
        exclude : /(node_modules)/,
        include : path.join(__dirname, 'src'),
        use : [
          {
            loader : 'babel-loader',
            options : {
              presets : [
                
                'react'
              ]
            }
        }
        ]
      }]
    }
};

module.exports = config;
