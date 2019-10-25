import { ApiService } from "../../services/api";
import { LIST_JURY, GET_JURY } from "../../actions.type";
import { SET_JURYS, SET_JURY } from "../../mutations.type";

export const actions = {
  async [LIST_JURY](context, payload) {
    const { data } = await ApiService.get(payload);
    if ("Items" in data) {
      context.commit(SET_JURYS, data.Items);
    } else {
    }
  },
  async [GET_JURY](context, payload) {
    const { data } = await ApiService.get(payload);
    if ("Item" in data) {
      context.commit(SET_JURY, data.Item);
    } else {
    }
  }
};
