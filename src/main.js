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
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";

export const aws_user_pools_web_client_id = "2ss70u7uomua2718s96nvngn7c"

const awsmobile = {
  aws_project_region: "eu-west-1",
  aws_cognito_identity_pool_id:
    "eu-west-1:a4a45966-4e14-41fa-a616-17c491e19ef4",
  aws_cognito_region: "eu-west-1",
  aws_user_pools_id: "eu-west-1_mfI54YDaz",
  aws_user_pools_web_client_id,
  oauth: {}
};

Amplify.configure(awsmobile);
// Amplify.configure(config)
Vue.use(AmplifyPlugin, AmplifyModules);

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

router.beforeEach((to, from, next) => {
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
