import proxy from 'http-proxy-middleware';

module.exports = function(app) {
    app.use(
        proxy("/login", {
            target: "http://localhost:3030/api/v1",
            secure: false,
            changeOrigin: true
        })
    );
};