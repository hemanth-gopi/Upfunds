// $Id$

const merge = require('webpack-merge'); // no i18n
const webpack = require('webpack'); //no i18n
const baseConfig = require('./webpack.base'); // no i18n
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // no i18n
// const ManifestPlugin = require('webpack-manifest-plugin'); // no i18n
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin'); // no i18n
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // no i18n

module.exports = merge(baseConfig, {
    mode: 'production', // no i18n

    // stats: 'errors-only', // no i18n

    /**
     * see this to learn about caching https://jakearchibald.com/2016/caching-best-practices/
     * caching configuration is done as per guidance in https://webpack.js.org/guides/caching/
     */

    output: {
        filename: "[name].bundle" + ".js", // no i18n
        chunkFilename: "[contenthash]" + ".js" // no i18n
    },

    plugins: [
        /* refer this https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching#make_module_ids_more_stable*/
        // new webpack.HashedModuleIdsPlugin(),

        // new ManifestPlugin(),

        new ExtractCssChunks({
            filename: "[name].bundle.css",
            chunkFilename: "[contenthash].css",
            orderWarning: true // Disable to remove warnings about conflicting order between imports
        })

        // new OptimizeCssAssetsPlugin({
        //     cssProcessorPluginOptions: {
        //         preset: ['default', { discardComments: { removeAll: true } }]
        //     }
        // })
    ],

    // optimization: {

    //     minimizer: [
    //         new UglifyJsPlugin({
    //             parallel: true,
    //             sourceMap: true,
    //             //see this for uglify options https://github.com/mishoo/UglifyJS2#minify-options
    //             uglifyOptions: {
    //                 output: {
    //                     comments: false,
    //                     beautify: false
    //                 },
    //                 compress: {
    //                     drop_console: true
    //                 }
    //             }
    //         })
    //     ]
    // }
});
