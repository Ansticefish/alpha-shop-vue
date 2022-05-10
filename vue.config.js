module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/variables&mixins.scss";'
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/alpha-shop-vue/'
    : '/'
}
