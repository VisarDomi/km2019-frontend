const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, "dist"),
        // Required - Routes to render.
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
          "/artist/Lindita/232bd58d-ff5d-41ad-a95b-eac60fdb5cb1",
          "/artist/Genti%20Deda/264ddaaf-c658-4b12-ae5d-55de99e5c8cc",
          "/artist/Rea%20Nuhu/5bb5c061-b2b7-4cf5-9f7f-85c8de94d231",
          "/artist/Khuba/7b7b993b-20bd-4cd4-b17a-d6a4fc6c63d6",
          "/artist/Sisma/8a2ed33d-38db-4558-a022-a1a120ff5228",
          "/voto"
        ]
      })
    ]
  }
};
