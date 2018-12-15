// https://docs.cypress.io/api/introduction/api.html

describe('Swipe Card', () => {
  it('Homepage has title', () => {
    cy.visit('/')
    cy.contains('h1', 'SWIPE CARD')
    cy.contains('p', 'VUEJS + INTERACT JS + D3')
  })

  it('Has a user selection count initialized at 0', () => {
    cy.visit('/')
    cy.contains('h3', 'User Selections: 0')
  })
})
