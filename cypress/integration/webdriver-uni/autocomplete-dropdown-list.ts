describe("Verify autocomplete dropdown lists via webdriver uni", () => {
    before( () => {
        cy.visit("/");
        cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({force:true});
    });

    it("Select specific product via autocomplete list", () => {
        cy.get('#myInput').type('A');
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Avacado';
            if(prod === productToSelect){
               cy.wrap($el).click();                                                //    $el.trigger('click');  Same outcome
               cy.get('#submit-button').click();
               cy.url().should('include', productToSelect);
            }
        }).then(() => {
            cy.get('#myInput').type('G');
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Grapes';
                if(prod === productToSelect){
                   cy.wrap($el).click();                                                //    $el.trigger('click');  Same outcome
                   cy.get('#submit-button').click();
                   cy.url().should('include', productToSelect);
                }
        })
    })
})
})