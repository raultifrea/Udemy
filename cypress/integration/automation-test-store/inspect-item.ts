describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item header", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(itemHeaderText=>{
            console.log("Selected the following item:" + itemHeaderText.text());
        });
        // cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    });
})