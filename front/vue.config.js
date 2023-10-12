const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../server/src/main/resources/static',
  devServer: {
    proxy: 'http://localhost:8080'
  }
})
