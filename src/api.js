// import Vue from "vue";
// import axios from "axios";
// import VueAxios from "vue-axios";

// const API_URL =
//   "https://fw9cy4j1y6.execute-api.eu-west-1.amazonaws.com/Dev/api";

// export const ApiService = {
//   init() {
//     axios.defaults.headers.common = {
//       "Access-Control-Allow-Headers": "http://localhost:8080",
//       "Content-Type": "application/json"
//     };
//     Vue.use(VueAxios, axios);
//     Vue.axios.defaults.baseURL = API_URL;
//   },
//   query(resource, params) {
//     return Vue.axios.get(resource, params).catch(error => {
//       throw new Error(`[RWV] ApiService ${error}`);
//     });
//   },
//   get(resource) {
//     console.log(`get resource is:`, resource);
//     return Vue.axios.get(`${resource}`).catch(error => {
//       throw new Error(`[RWV] ApiService ${error}`);
//     });
//   },
//   post(resource, params) {
//     console.log(`post resource and params are:`, resource, params);
//     return Vue.axios.post(`${resource}`, params);
//   },
//   login(resource, params) {
//     console.log(`login resource and params are:`, resource, params);
//     return Vue.axios.post(`${resource}`, {}, params);
//   },
//   put(resource, params) {
//     console.log(`put params are:`, params);
//     console.log(`put resource is:`, resource);
//     return Vue.axios.put(`${resource}`, params);
//   },
//   delete(resource) {
//     console.log(`delete resource is:`, resource);
//     return Vue.axios.delete(resource).catch(error => {
//       throw new Error(`[RWV] ApiService ${error}`);
//     });
//   }
// };

// export const ArtistService = {
//   getArtists(params) {
//     return ApiService.query(``, params);
//   }
// };
