module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.module.rules.push({
                test: /\.(gif|png|jpg|jpeg)$/,
                use: ['file-loader'],
            });
            return webpackConfig;
        },
    },
};