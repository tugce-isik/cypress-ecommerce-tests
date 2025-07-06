describe('Anmeldetests', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
    cy.contains('Signup / Login').click();
  })
  it('Meldet sich mit gültigen Zugangsdaten an', () => {
    cy.get('[data-qa="login-email"]').type('kucuktugce1994@gmail.com');
    cy.get('[data-qa="login-password"]').type('hfq8@gygp5TJi@M');
    cy.get('[data-qa="login-button"]').click();
    cy.contains('Logged in as').should('exist');
    cy.contains('Products').click();
    cy.get('#search_product').type("jeans");
    cy.get('#submit_search').click();
    cy.contains('Searched Products').should('exist');
    cy.get('.productinfo').should('have.length.greaterThan', 0);
    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.get('.productinfo .add-to-cart').first().click();
    cy.contains('Added!').should('exist');
    cy.contains('View Cart').click();
    cy.url().should('include', 'view_cart')
    cy.get('.cart_product').should('exist');
    cy.get('.check_out').click();
    cy.get('textarea[name="message"]').type('Bitte liefern Sie meine Bestellung nach 18:00 Uhr an Werktagen.');
    cy.get('a[href="/payment"]').click();
    cy.get('[name="name_on_card"]').type('Test User');
    cy.get('[name="card_number"]').type('4111111111111111');
    cy.get('[name="cvc"]').type('123');
    cy.get('[name="expiry_month"]').type('12');
    cy.get('[name="expiry_year"]').type('2027');
    cy.contains('Pay and Confirm Order').click();
    cy.contains('Order Placed!').should('exist');
  })
})