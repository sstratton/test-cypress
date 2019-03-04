context('Product Tests (CRUD)', () => {


    beforeEach(() => {

        cy.visit('');

    })

    it("Creates a Product", () => {

        cy.get('a').click();

        cy.url().should('include', 'product-add');

        cy.get('#mat-input-0').type('carrots');
        cy.get('#mat-input-1').type('orange veg');
        cy.get('#mat-input-2').type('10');

        cy.get('[type="submit"]').click();

        cy.get('h2').should('contain', 'carrots');


    })


})