describe('Benutzerregistrierungstests', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
        cy.contains('Signup / Login').click();
        cy.get('[data-qa="login-email"]').type('testFurCypress@protonmail.com');
        cy.get('[data-qa="login-password"]').type('3taBjuUG2W6YcnT');
        cy.get('[data-qa="login-button"]').click();
    });

    it('Registriert sich erfolgreich mit gültigen Daten', () => {

        cy.contains('Delete Account').should('exist').click();
        cy.contains('Account Deleted!').should('exist');
    });
})