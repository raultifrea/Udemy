describe("Interact with dropdown lists via webdriveruni", () => {
    before( () => {
        cy.visit("/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true});
    });

    it("Select specific values via select dropdown list", () => {
        cy.get('#dropdowm-menu-2').as('dropdown2')

        cy.get('#dropdowm-menu-1').select('c#');
        cy.get('@dropdown2').select('testng').should('have.value', 'testng');
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery');

        cy.get('@dropdown2').select('maven').contains('Maven');
        cy.get('@dropdown2').contains('TestNG').should('have.value', 'testng');
    });
});