const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    const path=process.env.REACT_APP_PATH_TO;
    alert("in proxy");
    //era ok let ppath="http://localhost:5000/"
    let ppath="http://34.247.255.42:5000/"

    console.log("Calea este "+ppath);
    app.use(
        '/server', // This is the API endpoint that will be proxied
        createProxyMiddleware({
            target: ppath, // This is the target server
            changeOrigin: true,
        })
    );
};

