import Vue from "vue";
import Vuex from "vuex";
import loading from "./modules/loading";
import artist from "./modules/artist";
import jury from "./modules/jury";
import blog from "./modules/blog";
import vote from "./modules/vote";
import album from "./modules/album";
import { ApiService } from "./services/api";
import { PUT, DELETE } from "./actions.type";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loading,
    artist,
    jury,
    blog,
    vote,
    album
  },
  actions: {
    async [PUT](context, payload) {
      await ApiService.put(payload);
    },
    async [DELETE](context, payload) {
      await ApiService.delete(payload);
    }
  },
  strict: process.env.NODE_ENV !== "production"
});
