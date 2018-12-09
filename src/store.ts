import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedCount: 0,
    notSelectedCount: 0,
    skippedCount: 0,
    userCumulativeCount: 0,
  },
  mutations: {
    incrementCount: (state, countType) => {
      switch (countType) {
        case 'selected':
          state.selectedCount ++;
          state.userCumulativeCount ++;
          break;
        case 'notSelected':
          state.notSelectedCount ++;
          state.userCumulativeCount --;
          break;
        case 'skipped':
          state.skippedCount ++;
          break;
      }
    },
  },
  actions: {

  },
});
