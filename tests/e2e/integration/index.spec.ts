describe('Example Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('.btn__set', 'Set User Store')
    cy.screenshot()
  })
  it('Visits the random image url', () => {
    cy.get('a[href="/random-image"]').click()
    cy.get('.img__random').should('have.attr', 'alt', 'Random Image')
    cy.screenshot()
  })
})
