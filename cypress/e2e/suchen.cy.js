describe('Produktsuche Tests', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  });

    it('Searches for a product and verifies results', () => {
        cy.contains('Products').click();
        cy.get('#search_product').type("jeans");
        cy.get('#submit_search').click();
        cy.contains('Searched Products').should('exist');
        cy.get('.productinfo').should('have.length.greaterThan', 0);
    });
})