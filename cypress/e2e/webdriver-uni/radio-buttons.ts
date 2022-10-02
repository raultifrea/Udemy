describe("Verify radio buttons via webdriveruni", () => {
    before( () => {
        cy.visit("/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true});
    })

    it("Check specific radio buttons", () => {
        cy.get('#radio-buttons').find('[type="radio"]').first().check();
        cy.get('#radio-buttons').find('[type="radio"]').eq(1).check();      //the second result
    });

    it("Validate the states of specific radio buttons", () => {
        cy.get('[value="lettuce"]').should('not.be.checked');
        cy.get('[value="pumpkin"]').should('be.checked')

        // only one can be checked at a time
       cy.get('[value="lettuce"]').check().should('be.checked')
       cy.get('[value="pumpkin"]').should('not.be.checked')

       cy.get('[value="cabbage"]').as('cabbage')
       cy.get('@cabbage').should('be.disabled')
       cy.get('@cabbage').invoke('removeAttr', 'disabled').should('be.enabled')

    });

})