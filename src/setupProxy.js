const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    // app.use(
    //     '/server',
    //     createProxyMiddleware({
    //         target: 'http://edge:5000',
    //         changeOrigin: true,
    //     })
    // );
};
