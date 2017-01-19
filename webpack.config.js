const webpack = require('webpack');
const common  = require('./webpack.common.config');
const path = require('path');
/**
 * Add the uglify plugin for production builds
 */
common.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    mangle: true
}));

/**
 * Swap React for react-lite in production
 */
common.resolve = {
    alias: {
        'foundation': path.resolve(__dirname,'node_modules/foundation-sites/scss/foundation.scss')
    }
};

module.exports = common;
