const merge = require('webpack-merge');
const prod = require('./prod.webpack.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(prod, {
   plugins: [
    new BundleAnalyzerPlugin({ openAnalyzer: true, generateStatsFile: true })
  ]
});