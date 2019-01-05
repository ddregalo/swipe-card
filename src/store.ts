import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [] as any[],
    error: [] as any[],
    notSelectedCount: 0,
    selectedCount: 0,
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
    getCharacters: async (state) => {
      try {
        const response = await axios.get(`https://swapi.co/api/people/`);
        response.data.results.forEach((character: any) => {
        state.characters.push(character.name.toString());
      });
      } catch (e) {
        state.error.push(e);
      }
    },
  },
  actions: {
    getCharacters({commit}) {
      commit('getCharacters');
    },
  },
});
