/* eslint-disable import/no-extraneous-dependencies */

const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(proxy('/api', { target: process.env.REACT_APP_PROXY_SERVER }));
};
