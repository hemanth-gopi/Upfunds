// $Id$

const merge = require('webpack-merge'); // no i18n
const baseConfig = require('./webpack.prod'); // no i18n
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // no i18n

module.exports = merge(baseConfig, {

    plugins: [
        new BundleAnalyzerPlugin({
            analyzerPort: 8889
        })
    ],
});
