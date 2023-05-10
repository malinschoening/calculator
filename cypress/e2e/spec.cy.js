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

  it('Should be able to input numbers and get the difference', () => {
    cy.get('input[name=first]')
      .type(4)
    cy.get('input[name=second]')
      .type(2)
    cy.get('button[name=subtract]')
      .click()

    cy.get('.answer')
      .should('have.text', 'Svaret är 2')
  })

  it('Should be able to input numbers and get the quotient as an integer', () => {
    cy.get('input[name=first]')
      .type(10)
    cy.get('input[name=second]')
      .type(3)
    cy.get('button[name=divide]')
      .click()

    cy.get('.answer')
      .should('have.text', 'Svaret är 3')
  })

  it('Should be able to input numbers and get the product', () => {
    cy.get('input[name=first]')
      .type(4)
    cy.get('input[name=second]')
      .type(2)
    cy.get('button[name=multiply]')
      .click()

    cy.get('.answer')
      .should('have.text', 'Svaret är 8')
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