import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Artists from "./views/Artists.vue";
import SingleArtist from "./views/SingleArtist.vue";
import Blogs from "./views/Blogs.vue";
import SingleBlog from "./views/SingleBlog.vue";
import Rregullore from "./views/Rregullore.vue";
import Voto from "./views/Voto.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/artists",
      name: "Artists",
      component: Artists,
      meta: { transition: "overlay-right" }
    },
    {
      path: "/artist",
      name: "SingleArtist",
      component: SingleArtist,
      meta: { transition: "overlay-right" }
    },
    {
      path: "/blogs",
      name: "Blogs",
      component: Blogs,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog",
      name: "SingleBlog",
      component: SingleBlog,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/rregullore",
      name: "Rregullore",
      component: Rregullore,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/voto",
      name: "Voto",
      component: Voto,
      meta: { transition: "overlay-left" }
    }
  ]
});
