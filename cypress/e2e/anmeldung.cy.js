describe('Benutzerregistrierungstests', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
        cy.contains('Signup / Login').click();
    });

    it('Registriert sich erfolgreich mit gültigen Daten', () => {
        const meineEmail = `tugcesk580@gmail.com`;

        cy.contains(' Signup / Login').should('exist').click();
        cy.get('[data-qa="signup-name"]').type('Tugce');
        cy.get('[data-qa="signup-email"]').type(meineEmail);
        cy.get('[data-qa="signup-button"]').click();

        cy.get('#id_gender2').check('Mrs');
        cy.get('#password').type('hfq8@gygp5TJi@M');
        cy.get('#days').select('4');
        cy.get('#months').select('7');
        cy.get('#years').select('1994');

        cy.get('[data-qa="first_name"]').type('Tugce');
        cy.get('[data-qa="last_name"]').type('Kucuk');
        cy.get('[data-qa="address"]').type('123 Main St');

        cy.get('#country').select('Canada');
        cy.get('[data-qa="state"]').type('Ontario');
        cy.get('[data-qa="zipcode"]').type('M5V 2T6');
        cy.get('[data-qa="mobile_number"]').type('017668685207');

        cy.contains('Account Created!').should('exist');
        cy.get('[data-qa="continue-button"]').click();
        cy.get('[data-qa="logout"]').should('exist');
    });

    it('Zeigt eine Fehlermeldung für eine bereits vorhandene E-Mail-Adresse an', () => {
        cy.contains(' Signup / Login').should('exist').click();
        cy.get('[data-qa="signup-name"]').type('Tugce');
        cy.get('[data-qa="signup-email"]').type('tugcesk580@gmail.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('Email Address already exist!').should('exist')
    });


})