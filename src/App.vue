<template>
  <div id="app">
    <h1>SWIPE CARD</h1>
    <p>VUEJS + INTERACT JS + D3</p>
    <h3 style="padding-top: 50px;">User Selections: {{userCumulativeCount}}</h3> 
    <br/>
    <br/>
    <h5 v-if="error !== null">{{error}}</h5>
    <BarChart :selections="chartData" v-if="show"/>
    <button v-on:click="show = !show">Show Bar Chart</button>
    <br/>
    <br/>
		<GameCardStack
			:cards="characters"
			@cardAccepted="handleCardAccepted"
			@cardRejected="handleCardRejected"
			@cardSkipped="handleCardSkipped"
			@hideCard="removeCardFromDeck"
		/>
  </div>
</template>

<script>
import GameCardStack from './components/GameCardStack';
import BarChart from './components/BarChart';
import axios from 'axios';
import Vuex from 'vuex';
import store from './store.ts';
import Vue from 'vue';

Vue.use(Vuex);

export default {
  store,
  name: 'App',
  components: {
    GameCardStack,
    BarChart,
  },

  data() {
    return {
      characters: this.$store.state.characters,
      error: null,
      show: false,
      chartData: [],
    };
  },

  computed: {
    userCumulativeCount(){
      return this.$store.state.userCumulativeCount;
    },
    selectedCount() {
      return this.$store.state.selectedCount;
    },
    notSelectedCount() {
     return this.$store.state.notSelectedCount;
    },
    skippedCount() {
      return this.$store.state.skippedCount;
    },
  },

  methods: {
    calcChartData() {
      this.chartData = [
      {
        name: "Selected",
        count: this.selectedCount,
      },
      {
        name: "Rejected",
        count: this.notSelectedCount,
      },
      {
        name: "Skipped",
        count: this.skippedCount,
      }];
    },
    extractNames(responseData) {
      responseData.forEach((character) => {
        this.characters.push(character.name.toString());
      });
    },
    handleCardAccepted() {
      this.$store.commit('incrementCount', 'selected');
    },
    handleCardRejected() {
      this.$store.commit('incrementCount', 'notSelected');
    },
    handleCardSkipped() {
      this.$store.commit('incrementCount', 'skipped');
    },
    removeCardFromDeck() {
      if (this.characters.length == 1) {
        this.calcChartData();
      }
      this.characters.shift();
    }
  },

  async mounted() {
    this.$store.dispatch('getCharacters');
  },
};
</script>

<style lang="scss">
@import "./styles/mixins.scss";
@import "./styles/site.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
