# express-proxy
express mysql pm2 proxy


* 启动： npm run start
* 请求转发，类似于nginx 代理

- 1: express-http-proxy => app.use('/proxy', require('express-http-proxy')('www.google.com'));

- 2: http-proxy-middleware => app.use('/proxy',require('http-proxy-middleware')({target: 'www.google.com', changeOrigin: true}));


- pm2 启动项目  pm2 start [name(http服务文件)] --name [自定义名称] => pm2 start index.js -- name nodeLine-1

--- 
  这个是用来练习 node 请求转发， pm2 启动node进程的项目  ，通过练习了解一下 node网络请求、pm2 基础
