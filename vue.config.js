module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://viacep.com.br',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  transpileDependencies: [
    'vuetify'
  ]
}
