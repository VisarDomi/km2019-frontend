import { ApiService } from "../../services/api";
import { LIST_ARTIST, GET_ARTIST } from "../../actions.type";
import { SET_ARTISTS, SET_ARTIST } from "../../mutations.type";

export const actions = {
  async [LIST_ARTIST](context, payload) {
    const { data } = await ApiService.get(payload);
    if ("Items" in data) {
      context.commit(SET_ARTISTS, data.Items);
    } else {
    }
  },
  async [GET_ARTIST](context, payload) {
    const { data } = await ApiService.get(payload);
    if ("Item" in data) {
      context.commit(SET_ARTIST, data.Item);
    } else {
    }
  }
};
