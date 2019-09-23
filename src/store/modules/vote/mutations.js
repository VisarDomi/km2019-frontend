import { SET_VOTES, SET_VOTE, SET_VOTE_ERR } from "../../mutations.type";

export const mutations = {
  [SET_VOTES](state, votes) {
    state.votes = votes;
  },
  [SET_VOTE](state, vote) {
    state.vote = vote;
  },
  [SET_VOTE_ERR](state, voteErr) {
    state.voteErr = voteErr;
  }
};
