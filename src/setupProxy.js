const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/server', // This is the API endpoint that will be proxied
        createProxyMiddleware({
            target: 'http://localhost:5000/', // This is the target server
            changeOrigin: true,
        })
    );
};
