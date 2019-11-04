import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Artists from "./views/Artists.vue";
import SingleArtist from "./views/SingleArtist.vue";

import SingleJury from "./views/SingleJury.vue";

import Blogs from "./views/Blogs.vue";
import SingleBlog from "./views/SingleBlog.vue";

import Rregullore from "./views/Rregullore.vue";
import Voto from "./views/Voto.vue";
import VotoArtist from "./views/VotoArtist.vue";

import NotFound from "./views/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { transition: "overlay-left" }
    },
    { path: "*", component: NotFound },
    {
      path: "/artists",
      name: "Artists",
      component: Artists,
      meta: { transition: "overlay-right" }
    },
    {
      path: "/artist/:slug/:id",
      name: "SingleArtist",
      component: SingleArtist,
      meta: {
        title: `Artist`,
        transition: "overlay-right",
        metaTags: [
          {
            name: "description",
            content: `The Artist page of Kenga Magjike.`
          }
        ]
      }
    },
    {
      path: "/jury/:slug/:id",
      name: "SingleJury",
      component: SingleJury,
      meta: {
        title: `Jury`,
        transition: "overlay-right",
        metaTags: [
          {
            name: "description",
            content: `The Jury page of Kenga Magjike.`
          }
        ]
      }
    },
    {
      path: "/voto",
      name: "Voto",
      component: Voto,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/voto-artist/:slug/:id",
      name: "VotoArtist",
      component: VotoArtist,
      meta: {
        title: `Artist`,
        transition: "overlay-right",
        metaTags: [
          {
            name: "description",
            content: `The Artist page of Kenga Magjike.`
          }
        ]
      }
    },
    {
      path: "/blogs",
      name: "Blogs",
      component: Blogs,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog/:id",
      name: "SingleBlog",
      component: SingleBlog,
      meta: {
        title: `Blog`,
        transition: "overlay-right",
        metaTags: [
          {
            name: "description",
            content: `The Blog page of Kenga Magjike.`
          }
        ]
      }
    },

    {
      path: "/rregullore",
      name: "Rregullore",
      component: Rregullore,
      meta: { transition: "overlay-left" }
    }
  ]
});
