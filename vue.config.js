// const path = require('path')
// const webpack = require('webpack')
// const httpType = 'http://'
const proxyUrl =
  'https://www.fastmock.site/mock/26e2031e7cde6d1b0c40597802d33e40' // 代理地址设置
module.exports = {
  //   assetsDir: 'static',
  // 构建时不进行eslint校验
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 生产环境禁止source map
  productionSourceMap: false,
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: proxyUrl,
    //     changeOrigin: true
    //   }
    // }
  }
}
