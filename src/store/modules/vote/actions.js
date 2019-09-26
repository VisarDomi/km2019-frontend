import { ApiService } from "../../services/api";
import { LIST_VOTE, PUT_VOTES, GET_HAS_VOTED } from "../../actions.type";
import {
  SET_VOTES,
  SET_VOTE,
  SET_VOTE_ERR,
  SET_HAS_VOTED
} from "../../mutations.type";

export const actions = {
  async [LIST_VOTE](context, payload) {
    const { data } = await ApiService.get(payload);
    if ("Items" in data) {
      // // console.log("Artist list (data.Items of the response)", data.Items);
      context.commit(SET_VOTES, data.Items);
    } else {
      // // console.log("There is no Items in the response object");
    }
  },
  async [GET_HAS_VOTED](context, payload) {
    await ApiService.get(payload)
      .then(response => {
        console.log("response is", response);
        if (response.status === 200) {
          // // console.log("Artist list (data.Items of the response)", data.Items);
          context.commit(SET_HAS_VOTED, false);
        } else if (response.status === 409) {
          context.commit(SET_HAS_VOTED, true);
          //   // // console.log("There is no Items in the response object");
        }
      })
      .catch(err => {
        context.commit(SET_VOTE_ERR, Object.assign({}, err));
      });
  },
  async [PUT_VOTES](context, payload) {
    await ApiService.put(payload)
      .then(res => {
        // console.log("success voted", res);
        context.commit(SET_VOTE, res);
      })
      .catch(err => {
        // console.log("fail voted", Object.assign({}, err));
        context.commit(SET_VOTE_ERR, Object.assign({}, err));
      });
  }
};
