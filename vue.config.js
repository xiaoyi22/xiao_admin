module.exports = {
  lintOnSave: false,
  devServer: {
    port: 3000,
    open: true,
    proxy:null,
  },
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map'
  }
}
