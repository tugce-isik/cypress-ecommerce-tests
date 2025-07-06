describe('Anmeldetests', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
    cy.contains('Signup / Login').click()
  })

  it('Meldet sich mit gültigen Zugangsdaten an', () => {
    cy.get('[data-qa="login-email"]').type('tugcesk580@gmail.com')
    cy.get('[data-qa="login-password"]').type('hfq8@gygp5TJi@M')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as').should('exist')
  })

  it('Zeigt einen Fehler bei ungültigen Anmeldedaten', () => {
    cy.get('[data-qa="login-email"]').type('falch@mail.com')
    cy.get('[data-qa="login-password"]').type('flachpass')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Your email or password is incorrect!').should('exist')
  })
})

// describe('Anmeldetests', () => {
//     beforeEach(() => {     
//       cy.visit('https://www.teknosa.com/');
//       cy.contains('Kabul Et', { includeShadowDom: true }).click();
//       cy.contains('Giriş Yap').click();
//       cy.get('.hum-buttons').contains('Giriş Yap').click();
//   })
//   it('Meldet sich mit gültigen Zugangsdaten an', () => {
//     cy.get('#j_username1').click().type('testFurCypress@protonmail.com');
//     cy.get('#newLoginForm button').click();
//     cy.get('#j_password').click().type('3taBjuUG2W6YcnT');
//     cy.get('#customerLoginButton').click();
//     cy.contains('Giriş Yap').should('not.exist');
//   });
//   it('Zeigt einen Fehler bei ungültigen Anmeldedaten', () => {
//     cy.get('#j_username1').click().type('wrong@mail.com');
//     cy.get('#newLoginForm button').click();
//     cy.contains('Mail adresi ile kayıtlı bir hesap bulunamamıştır.').should('exist')
//   })
// })