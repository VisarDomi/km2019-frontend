import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueHead from "vue-head";

import axios from "axios";

import "./registerServiceWorker";
import VueCarousel from "vue-carousel";
Vue.config.productionTip = false;
import VuePageTransition from "vue-page-transition";

Vue.use(VuePageTransition);
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import { al, en } from "./translations";

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

router.beforeEach((to, from, next) => {
  console.log("before each");
  // const lang = to.params.lang;

  // if (!["al", "en"].includes(lang)) return next("al");

  // if (i18n.locale !== lang) {
  //   i18n.locale = lang;
  // }
  return next();
});

new Vue({
  router,
  store,
  i18n,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
