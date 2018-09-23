const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env': {
          LOCALE: JSON.stringify(process.env.LOCALE || 'en')
        }
      })
    ]
  })
}