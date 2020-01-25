const merge = require('webpack-merge');
const base=require('./webpack.config.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(base,{
            mode: 'development',
            devtool: 'inline-source-map',
            devServer: {
                contentBase: './dist'
            },
            output: {
                filename: '[name].js',
              },
              
            plugins: [
                new Dotenv({
                    path: './dev.env'
                }),
            ],
        }
    )