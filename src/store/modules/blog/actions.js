import { ApiService } from "../../services/api";
import { LIST_BLOG, GET_BLOG } from "../../actions.type";
import { SET_BLOGS, SET_BLOG } from "../../mutations.type";

export const actions = {
  async [LIST_BLOG](context, payload) {
    const { data } = await ApiService.get(payload);
    if ("Items" in data) {
      context.commit(SET_BLOGS, data.Items);
    } else {
    }
  },
  async [GET_BLOG](context, payload) {
    const { data } = await ApiService.get(payload);
    if ("Item" in data) {
      context.commit(SET_BLOG, data.Item);
    } else {
    }
  }
};
