var path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'components')
      }
    },
  }
}