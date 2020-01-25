const merge = require('webpack-merge');
const base=require('./webpack.config.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(base,{
            mode: 'production',
            output: {
                filename: '[name].[chunkhash].js',
            },
            plugins: [
                new Dotenv({
                    path: './prod.env'
                }),
            ],
        }
    )