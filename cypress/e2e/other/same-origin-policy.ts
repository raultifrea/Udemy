describe("Cypress web security", () => {
    it.only("Validate visiting two different domains", () => {
        cy.visit("https://webdriveruniversity.com");
        //this will fail
        cy.visit("https://automationteststore.com/");
    });

    it("Validate visiting two different domains via user actions", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    });
})