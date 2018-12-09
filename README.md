# Swipe Card

A card stack that a user swipes right (accept) or left (reject) or down (skip). This is built entirely in the front end with VueJS and Interactjs and Scss. Just playing around with the cards in a variety of ways to explore the functionality. I have a bunch of mini mvps here to try out:

1. A simple counter where each card has a value of 1 and the cumulative total of the accepted (+1), rejected (-1) and skipped cards (0) is displayed.

2. Each card displays a character retrieved from https://swapi.co/ api and then displays a list of the selected character names.

3. Display a horizontal bar chart of the number of selected and unselcted characters using d3:
   * Display the chart when a button is clicked.
   * Add skipped selections to chart.

4. Implement the above using a Vuex store.


## Frameworks
* VueJS
* InteractJS
* Jest (unit testing)
* Cypress (e2e testing) 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```
