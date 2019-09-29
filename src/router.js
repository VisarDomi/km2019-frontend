import { setMeta } from "@/common/functions";

import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Artists from "./views/Artists.vue";
import SingleArtist from "./views/SingleArtist.vue";

import Juria from "./views/Juria.vue";
import JuriaArben from "./views/JuriaArben.vue";
import JuriaArmend from "./views/JuriaArmend.vue";
import JuriaJonida from "./views/JuriaJonida.vue";
import JuriaDj from "./views/JuriaDj.vue";
import JuriaEnkel from "./views/JuriaEnkel.vue";

import Blogs from "./views/Blogs.vue";
import SingleBlog from "./views/SingleBlog.vue";

import Blog1 from "./views/Blog1.vue";
import Blog2 from "./views/Blog2.vue";
import Blog3 from "./views/Blog3.vue";
import Blog4 from "./views/Blog4.vue";
import Blog5 from "./views/Blog5.vue";
import Blog6 from "./views/Blog6.vue";
import Blog7 from "./views/Blog7.vue";

import Blog8 from "./views/Blog8.vue";
import Blog9 from "./views/Blog9.vue";
import Blog10 from "./views/Blog10.vue";
import Blog11 from "./views/Blog11.vue";
import Blog12 from "./views/Blog12.vue";
import Blog13 from "./views/Blog13.vue";
import Blog14 from "./views/Blog14.vue";
import Blog15 from "./views/Blog15.vue";
import Blog16 from "./views/Blog16.vue";

import Blog0 from "./views/Blog0.vue";
import Blog01 from "./views/Blog01.vue";
import Blog02 from "./views/Blog02.vue";

import Rregullore from "./views/Rregullore.vue";
import Voto from "./views/Voto.vue";
import VotoArtist from "./views/VotoArtist.vue";

import NotFound from "./views/NotFound.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // base: "/:lang",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { transition: "overlay-left" }
    },
    { path: "*", component: NotFound },
    { path: "/about", component: About },
    {
      path: "/artists",
      name: "Artists",
      component: Artists,
      meta: { transition: "overlay-right" }
    },
    {
      path: "/juria",
      name: "Juria",
      component: Juria,
      meta: { transition: "overlay-right" }
    },
    {
      path: "/artist/:slug/:id",
      name: "SingleArtist",
      component: SingleArtist,
      meta: setMeta("SingleArtist", true)
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
      meta: setMeta("VotoArtist", true)
    },
    {
      path: "/arbenskenderaj",
      name: "JuriaArben",
      component: JuriaArben,
      meta: { transition: "overlay-right" }
    },
    {
      path: "/armendrexhepagiqi",
      name: "JuriaArmend",
      component: JuriaArmend,
      meta: { transition: "overlay-right" }
    },
    {
      path: "/jonidamaliqi",
      name: "JuriaJonida",
      component: JuriaJonida,
      meta: { transition: "overlay-right" }
    },
    {
      path: "/dj",
      name: "JuriaDj",
      component: JuriaDj,
      meta: { transition: "overlay-right" }
    },
    {
      path: "/enkeldemi",
      name: "JuriaEnkel",
      component: JuriaEnkel,
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
      path: "/blog1",
      name: "Blog1",
      component: Blog1,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog2",
      name: "Blog2",
      component: Blog2,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog3",
      name: "Blog3",
      component: Blog3,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog4",
      name: "Blog4",
      component: Blog4,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog5",
      name: "Blog5",
      component: Blog5,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog6",
      name: "Blog6",
      component: Blog6,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog7",
      name: "Blog7",
      component: Blog7,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog8",
      name: "Blog8",
      component: Blog8,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog9",
      name: "Blog9",
      component: Blog9,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog10",
      name: "Blog10",
      component: Blog10,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog11",
      name: "Blog11",
      component: Blog11,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog12",
      name: "Blog12",
      component: Blog12,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog13",
      name: "Blog13",
      component: Blog13,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog14",
      name: "Blog14",
      component: Blog14,
      meta: { transition: "overlay-left" }
    },    
    {
      path: "/blog15",
      name: "Blog15",
      component: Blog15,
      meta: { transition: "overlay-left" }
    },    
    {
      path: "/blog16",
      name: "Blog16",
      component: Blog16,
      meta: { transition: "overlay-left" }
    },    
    {
      path: "/blog0",
      name: "Blog0",
      component: Blog0,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog01",
      name: "Blog01",
      component: Blog01,
      meta: { transition: "overlay-left" }
    },
    {
      path: "/blog02",
      name: "Blog02",
      component: Blog02,
      meta: { transition: "overlay-left" }
    },

    {
      path: "/rregullore",
      name: "Rregullore",
      component: Rregullore,
      meta: { transition: "overlay-left" }
    }
  ]
});
