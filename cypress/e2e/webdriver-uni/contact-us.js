describe("Test contact us from via WebdriverUni", () => {
    before(()=>{
        cy.fixture('example').then((data) =>{
        //    this.data = data;
        globalThis.data = data;
        })
    })
    beforeEach(()=>{
        cy.visit("/");
        // removed attribute target from HTML so that it opens in the same tab
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true});
    })
    it("Should be able to submit form", () => {
        cy.document().should('have.property', 'charset', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        cy.get("[name='first_name']").type(data.first_name);
        cy.get("[name='last_name']").type(data.last_name);
        cy.get("[name='email']").type(data.email);
        cy.get("[name='message']").type("I would like to contact you");
        cy.get("[type='submit']").click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    it("Should not be able to submit form", () => {
        cy.get("[name='first_name']").type(data.first_name);
        cy.get("[name='last_name']").type(data.last_name);
        cy.get("[name='message']").type("I would like to contact you");
        cy.get("[type='submit']").click();
        cy.get('body').contains('Error: all fields are required');
        cy.get('body').should('contain', "Error: all fields are required");
    });
})