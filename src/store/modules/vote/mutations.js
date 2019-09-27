import { SET_VOTES, SET_VOTE, SET_VOTE_ERR, SET_HAS_VOTED } from "../../mutations.type";

export const mutations = {
  [SET_VOTES](state, votes) {
    state.votes = votes;
  },
  [SET_VOTE](state, vote) {
    state.vote = vote;
  },
  [SET_HAS_VOTED](state, hasVoted) {
    state.hasVoted = hasVoted;
  },
  [SET_VOTE_ERR](state, voteErr) {
    state.voteErr = voteErr;
  }
};
