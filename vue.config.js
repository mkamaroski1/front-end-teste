const path = require('path');

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
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components')
      }
    }
  }
};
