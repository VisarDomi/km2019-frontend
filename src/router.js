import Vue from "vue";
import Router from "vue-router";

const Artists = () => import("@/views/Artists.vue");
const SingleArtist = () => import("@/views/SingleArtist.vue");
const SingleJury = () => import("@/views/SingleJury.vue");
const Blogs = () => import("@/views/Blogs.vue");
const SingleBlog = () => import("@/views/SingleBlog.vue");
const Rregullore = () => import("@/views/Rregullore.vue");
const Voto = () => import("@/views/Voto.vue");
const VotoArtist = () => import("@/views/VotoArtist.vue");
const NotFound = () => import("@/views/NotFound.vue");
const Home = () => import("@/views/Home.vue");

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
