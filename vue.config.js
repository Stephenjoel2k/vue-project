const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
  pwa: {
    name: 'MusicHabits',
    themeColor: '#000',
    msTileColor: '#000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
        swDest: 'sw.js',
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
