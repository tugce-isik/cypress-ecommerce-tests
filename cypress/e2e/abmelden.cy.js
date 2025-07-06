describe('Benutzerregistrierungstests', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
        cy.contains('Signup / Login').click();
        cy.get('[data-qa="login-email"]').type('kucuktugce1994@gmail.com');
        cy.get('[data-qa="login-password"]').type('hfq8@gygp5TJi@M');
        cy.get('[data-qa="login-button"]').click();
    });

    it('Registriert sich erfolgreich mit gültigen Daten', () => {

        cy.contains('Logout').should('exist').click();
        cy.contains('Signup / Login').should('exist');
    });
})