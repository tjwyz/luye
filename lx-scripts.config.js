const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    cdnPrefix: '/',
    assetsDir: 'static/luye',
    chainWebpack(config) {
        if (process.env.GEN_WEBPACK_BUNDLE_ANALYZER === 'true') {
            config.plugin('analyzer').use(BundleAnalyzerPlugin, [{
                analyzerMode: 'static',
                openAnalyzer: false,
            }]);
        }
    },
};
