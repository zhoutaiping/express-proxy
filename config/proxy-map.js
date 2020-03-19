const proxyTable = new Map([
  ['^/api', 'http://adminv5.test.nodevops.cn'],
  ['^/asset/v1','http://api.kong.test.nodevops.cn'],
  ['^/tag','http://api.kong.test.nodevops.cn'],
  ['^/s_disp','http://api.kong.test.nodevops.cn']
])

module.exports = proxyTable