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

export const aws_user_pools_web_client_id = "5qbjv29p8e8f2vv05c7dmr37fs";

const awsmobile = {
  aws_project_region: "eu-west-1",
  aws_cognito_identity_pool_id:
    "eu-west-1:61ecf7b6-4bc0-467c-91c5-028fe5587417",
  aws_cognito_region: "eu-west-1",
  aws_user_pools_id: "eu-west-1_XwFoO4emX",
  aws_user_pools_web_client_id,
  oauth: {}
};

Amplify.configure(awsmobile);
// Amplify.configure(config)
Vue.use(AmplifyPlugin, AmplifyModules);


// var IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');

// // Create IPGeolocationAPI object. Constructor takes two parameters.
// // 1) API key (Optional: To authenticate your requests through "Request Origin", you can skip it.)
// // 2) Async (Optional: It is used to toggle "async" mode in the requests. By default, it is true.)
// var ipgeolocationApi = new IPGeolocationAPI("1f0bd03d73e247a8b5a77bb64ba53268")

// // Function to handle response from IP Geolocation API
// function handleResponse(json) {
//   console.log(json);
// }

// var GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');

// // Get complete geolocation for the calling machine's IP address
// ipgeolocationApi.getGeolocation(handleResponse);

// An example script for redirecting users from USA to https://google.com/
// and users from Canada to https://google.ca/

// ip-api endpoint URL
// we need only the countryCode, but you can request more fields
// see http://ip-api.com/docs/api:json for documentation
var endpoint = 'http://ip-api.com/json/?fields=query';

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    console.log("response is:" , response)
		if(response.status !== 'success') {
			console.log('query failed: ' + response.message);
			return
		}
	}
};
xhr.open('GET', endpoint, true);
xhr.send();

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

new Vue({
  router,
  store,
  i18n,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
