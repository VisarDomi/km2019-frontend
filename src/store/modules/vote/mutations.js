import { SET_VOTES, SET_VOTE } from "../../mutations.type";

export const mutations = {
  [SET_VOTES](state, votes) {
    state.votes = votes;
  },
  [SET_VOTE](state, vote) {
    state.vote = vote;
  }
};
