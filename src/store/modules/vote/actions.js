import { ApiService } from "../../services/api";
import { LIST_VOTE, PUT_VOTES } from "../../actions.type";
import { SET_VOTES, SET_VOTE, SET_VOTE_ERR } from "../../mutations.type";

export const actions = {
  async [LIST_VOTE](context, payload) {
    const { data } = await ApiService.get(payload);
    if ("Items" in data) {
      // console.log("Artist list (data.Items of the response)", data.Items);
      context.commit(SET_VOTES, data.Items);
    } else {
      // console.log("There is no Items in the response object");
    }
  },
  async [PUT_VOTES](context, payload) {
    await ApiService.put(payload)
      .then(res => {
        console.log("success voted", res);
        context.commit(SET_VOTE, res);
      })
      .catch(err => {
        console.log("fail voted", Object.assign({}, err));
        context.commit(SET_VOTE_ERR, Object.assign({}, err));
      });
  }
};
