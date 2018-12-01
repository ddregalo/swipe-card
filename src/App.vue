<template>
  <div id="app">
    <h3>User Selections: {{userAcceptedCount}}</h3> 
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
import axios from 'axios';

export default {
  name: 'App',
  components: {
    GameCardStack,
  },

  data() {
    return {
      characters: [],
      userAcceptedCount: 0,
    };
  },

  methods: {
    extractNames(responseData) {
      responseData.forEach((character) => {
        this.characters.push(character.name.toString());
      });
    },
    handleCardAccepted() {
      this.userAcceptedCount ++;
      console.log('handleCardAccepted');
    },
    handleCardRejected() {
      this.userAcceptedCount --;
      console.log('handleCardRejected');
    },
    handleCardSkipped() {
      console.log('handleCardSkipped');
    },
    removeCardFromDeck() {
      this.characters.shift();
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
