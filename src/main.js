import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { ApiService } from "./store/services/api";
import store from "./store/index";
import VueHead from "vue-head";
import axios from "axios";
import "./registerServiceWorker";
import VueCarousel from "vue-carousel";
import VuePageTransition from "vue-page-transition";
import vueScrollTo from "vue-scrollto";
import VueI18n from "vue-i18n";
import { al, en } from "./translations";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(vueScrollTo);
Vue.config.productionTip = false;
Vue.use(VuePageTransition);
Vue.use(VueI18n);

ApiService.init();

export const i18n = new VueI18n({
  locale: "al",
  fallbackLocale: "al",
  messages: {
    en,
    al
  }
});

import "fullpage-vue/src/fullpage.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueFullpage from "fullpage-vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(axios);
Vue.use(VueHead);
Vue.use(BootstrapVue);
Vue.use(VueFullpage);
Vue.use(VueCarousel);

export const eventBus = new Vue();


// make metatags work in router

// const fbUserAgent1 = "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)"
// const fbUserAgent2 = "facebookexternalhit/1.1"

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => el.parentNode.removeChild(el)
  );
  if (!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
      tag.setAttribute("data-vue-router-controlled", "");
      return tag;
    })
    .forEach(tag => document.head.appendChild(tag));
  next();
});




new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  i18n,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
