const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/server',
        createProxyMiddleware({
            target: 'http://34.247.255.42:5000/',
            changeOrigin: true,
        })
    );
};
