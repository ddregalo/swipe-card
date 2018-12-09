<template>
  <div id="app">
    <h3>User Selections: {{userCumulativeCount}}</h3> 
    <br/>
    <br/>
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

export default {
  name: 'App',
  components: {
    GameCardStack,
    BarChart,
  },

  data() {
    return {
      characters: [],
      userCumulativeCount: 0,
      show: false,
      chartData: [],
      selectedCount: 0,
      notSelectedCount: 0,
      skippedCount: 0,
    };
  },

  methods: {
    extractNames(responseData) {
      responseData.forEach((character) => {
        this.characters.push(character.name.toString());
      });
    },
    handleCardAccepted() {
      this.userCumulativeCount ++;
      this.selectedCount ++;
      console.log('handleCardAccepted');
    },
    handleCardRejected() {
      this.userCumulativeCount --;
      this.notSelectedCount ++;
      console.log('handleCardRejected');
    },
    handleCardSkipped() {
      this.skippedCount ++;
      console.log('handleCardSkipped');
    },
    removeCardFromDeck() {
      if (this.characters.length == 1) {
        this.calcChartData();
      }
      this.characters.shift();
    },
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
  },

  async mounted() {
    try {
      const response = await axios.get(`https://swapi.co/api/people/`);
      this.extractNames(response.data.results);
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style lang="scss">
@import "./styles/mixins.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
