const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // target: "https://thisgun-test-1.herokuapp.com", //접속하려는 서버의 루트 URL
      target: "http://127.0.0.1:8000", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
};
