const fs = require('fs')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

const config = {
  async exportPathMap(defaultPathMap, options) {
    console.log(defaultPathMap, options)

    const pathMap = {
      '/': { page: '/index' },
      '/index': { page: '/index' },
      '/updates': { page: '/updates' }
    }

    fs.readdirSync('./pages/updates').map(name => {
      const id = name.replace(/\.[^/.]+$/, '')

      pathMap[`/updates/${id}`] = { page: `/updates/${id}` }
    })

    return pathMap
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })

    return config
  }
}

module.exports = withCss(withSass(config))
