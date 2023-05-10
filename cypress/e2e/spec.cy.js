describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5178/')
  })

  it('Should be able to input numbers and get a sum', () => {
    cy.get('input[name=first]')
      .type(4)
    cy.get('input[name=second]')
      .type(2)
    cy.get('button[name=add]')
      .click()

    cy.get('.answer')
      .should('have.text', 'Svaret är 6')
  })

  it('Should be able to reset the numbers', () => {
    cy.get('input[name=first]')
      .type(6)
    cy.get('input[name=second]')
      .type(8)
    cy.get('button[name=reset]')
      .click()

      cy.get('.answer')
      .should('have.text', '')
  })
})