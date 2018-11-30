<template>
  <div id="app">
    <h3>User Selections: {{userAcceptedCount}}</h3> 
    <br/>
    <br/>
		<GameCardStack
			:cards="visibleCards"
			@cardAccepted="handleCardAccepted"
			@cardRejected="handleCardRejected"
			@cardSkipped="handleCardSkipped"
			@hideCard="removeCardFromDeck"
		/>
  </div>
</template>

<script>
import GameCardStack from "./components/GameCardStack";

export default {
  name: "App",
  components: {
    GameCardStack
  },

  data() {
    return {
      visibleCards: ["Shamooooo", "Wassaaawwww", "Bob Regexxxxx"],
      userAcceptedCount: 0
    };
  },

  methods: {
    handleCardAccepted() {
      this.userAcceptedCount ++
      console.log("handleCardAccepted");
    },
    handleCardRejected() {
      this.userAcceptedCount --
      console.log("handleCardRejected");
    },
    handleCardSkipped() {
      console.log("handleCardSkipped");
    },
    removeCardFromDeck() {
      this.visibleCards.shift();
    }
  }
};
</script>

<style lang="scss">
@import "./styles/mixins.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
