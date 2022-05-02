describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        cy.visit("/");
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true});         // removed attribute target from HTML so that it opens in the same tab
        cy.url().should('include', 'contactus');
        cy.go('back');
        cy.reload(true);                                                                   //reload without using cache
        cy.url().should('include', "https://webdriveruniversity.com")
        cy.go('forward');
        cy.url().should('include', 'contactus');

        cy.go('back');
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', 'Login-Portal');
        cy.go(-1);                                                                          //same as 'back'

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', 'To-Do-List');
        cy.go('back');
    });
})