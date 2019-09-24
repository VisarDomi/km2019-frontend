const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

const productionPlugins = [
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, `dist`),
    routes: [
      "/blog0",
      "/blog1",
      "/blog1",
      "/blog2",
      "/blog3",
      "/blog4",
      "/blog5",
      "/blog6",
      "/blog7",
      "/blog8",
      "/blog9",
      "/blog10",
      "/blog11",
      "/blog12",
      "/voto"
    ],
    postProcess(renderedRoute) {
      renderedRoute.html = renderedRoute.html
        .replace(/<script (.*?)>/g, `<script $1 defer>`)
        .replace(`id="app"`, `id="app" data-server-rendered="true"`)

      return renderedRoute
    },
    renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
      inject: {},
      renderAfterElementExists: `[data-view]`
    })
  })
]

module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === `production`) {
      config.plugins.push(...productionPlugins)
    }
  }
}
