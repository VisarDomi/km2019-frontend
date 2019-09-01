import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueCarousel from 'vue-carousel';
Vue.config.productionTip = false;
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)
// import "animate.css";
import "fullpage-vue/src/fullpage.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueFullpage from "fullpage-vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(VueFullpage);
Vue.use(VueCarousel);

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
