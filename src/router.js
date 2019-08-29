import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Artists from "./views/Artists.vue";
import SingleArtist from "./views/SingleArtist.vue";
import Blogs from "./views/Blogs.vue";
import SingleBlog from "./views/SingleBlog.vue";
import Rregullore from "./views/Rregullore.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/artists",
      name: "Artists",
      component: Artists
    },
    {
      path: "/artist",
      name: "SingleArtist",
      component: SingleArtist
    },
    {
      path: "/blogs",
      name: "Blogs",
      component: Blogs
    },
    {
      path: "/blog",
      name: "SingleBlog",
      component: SingleBlog
    },
    {
      path: "/rregullore",
      name: "Rregullore",
      component: Rregullore
    }
  ]
});
