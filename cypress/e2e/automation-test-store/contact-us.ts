describe("Test contact us from via WebdriverUni", () => {
    const RU = Cypress.env('RU');
    before(()=>{
        cy.fixture("userDetails").as('user');
    })
    it("Should be able to submit form", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href$='contact']").click().then(element =>{ //starts with 'contact'
            cy.log("The full name is " + element.text());
            cy.log("The value of RU is " + RU);
        })                                               
        cy.get('@user').then((user: any)=>{
            cy.get('[id="ContactUsFrm_first_name"]').type(user.first_name);
            cy.get('[id="ContactUsFrm_email"]').type(user.email);
        })
        cy.get('[id="ContactUsFrm_email"]').should('have.attr', 'name', 'email');
        cy.get('[id="ContactUsFrm_enquiry"]').type("Do you provide additional discounts?");
        cy.get('button[title="Submit"][type="submit"]').click();
        cy.get('.mb40 > :nth-child(3)')
        .should('contain', 'Your enquiry has been successfully sent to the store owner!');
        cy.log("Test has completed");
    });
})