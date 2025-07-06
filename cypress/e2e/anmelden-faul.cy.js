describe('Anmeldefaultests', () => {
  it('Zeigt einen Fehler bei ungültigen Anmeldedaten', () => {
    cy.visit('https://automationexercise.com/');
    cy.contains('Signup / Login').click();
    cy.get('[data-qa="login-email"]').type('falch@mail.com');
    cy.get('[data-qa="login-password"]').type('falchpass');
    cy.get('[data-qa="login-button"]').click();
    cy.contains('Your email or password is INCORRECT!').should('exist');
  })
})