const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import '@/assets/css/estilo.less';`
      }
    }
  }
};