import Vue from "vue";
import Router from "vue-router";

const Artists = () => import("@/views/Artists");
const SingleArtist = () => import("@/views/SingleArtist");
const SingleJury = () => import("@/views/SingleJury");
const Blogs = () => import("@/views/Blogs");
const SingleBlog = () => import("@/views/SingleBlog");
const Rregullore = () => import("@/views/Rregullore");
const Voto = () => import("@/views/Voto");
const VotoArtist = () => import("@/views/VotoArtist");
const NotFound = () => import("@/views/NotFound");
const Home = () => import("@/views/Home");

Vue.use(Router);

function setMeta(name) {
  let meta = {
    title: `${name}`,
    transition: "overlay-right",
    metaTags: [
      {
        name: "description",
        content: `The ${name} page of Kenga Magjike.`
      }
    ]
  };
  return meta;
}

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
      meta: setMeta("Kënga Magjike")
    },
    { path: "*", component: NotFound },
    {
      path: "/artists",
      name: "Artists",
      component: Artists,
      meta: setMeta("Artistët")
    },
    {
      path: "/artist/:slug/:id",
      name: "SingleArtist",
      component: SingleArtist,
      meta: setMeta("Artistët")
    },
    {
      path: "/jury/:slug/:id",
      name: "SingleJury",
      component: SingleJury,
      meta: setMeta("Juria")
    },
    {
      path: "/voto",
      name: "Voto",
      component: Voto,
      meta: setMeta("Voto")
    },
    {
      path: "/voto-artist/:slug/:id",
      name: "VotoArtist",
      component: VotoArtist,
      meta: setMeta("Voto")
    },
    {
      path: "/blogs",
      name: "Blogs",
      component: Blogs,
      meta: setMeta("Të reja")
    },
    {
      path: "/blog/:id",
      name: "SingleBlog",
      component: SingleBlog,
      meta: setMeta("Blog")
    },

    {
      path: "/rregullore",
      name: "Rregullore",
      component: Rregullore,
      meta: setMeta("Rregullore")
    }
  ]
});
