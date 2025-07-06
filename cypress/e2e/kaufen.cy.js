describe('Warenkorb-Funktionalität Test', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    })

    it('Fügt ein Produkt zum Warenkorb hinzu', () => {
        cy.get('.product-image-wrapper').first().trigger('mouseover');
        cy.get('.productinfo .add-to-cart').first().click();
        cy.contains('Added!').should('exist');
        cy.contains('View Cart').click();
        cy.url().should('include', 'view_cart')
        cy.get('.cart_product').should('exist');
    })
})