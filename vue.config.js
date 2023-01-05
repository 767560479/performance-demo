const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/logstorage': {
        target: 'ttp://10.106.0.138:8083',
        changeOrigin: true, //  target是域名的话，需要这个参数，
        secure: false //  设置支持https协议的代理,
      }
    }
  }
});
