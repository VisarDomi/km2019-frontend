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
      context.commit(SET_VOTES, data.Items);
    } else {
    }
  },
  async [GET_HAS_VOTED](context, payload) {
    await ApiService.get(payload)
      .then(response => {
        if (response.status === 200) {
          context.commit(SET_HAS_VOTED, false);
        } else if (response.status === 409) {
          context.commit(SET_HAS_VOTED, true);
        }
      })
      .catch(err => {
        context.commit(SET_VOTE_ERR, Object.assign({}, err));
      });
  },
  async [PUT_VOTES](context, payload) {
    await ApiService.put(payload)
      .then(res => {
        context.commit(SET_VOTE, res);
      })
      .catch(err => {
        context.commit(SET_VOTE_ERR, Object.assign({}, err));
      });
  }
};
