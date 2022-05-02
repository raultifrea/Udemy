import ContactUs_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";

describe("Test contact us from via WebdriverUni", () => {

    Cypress.config('defaultCommandTimeout', 20000);   // applies to all commands in this describe block 
    const homepage_PO = new HomePage_PO();
    const contactus_PO = new ContactUs_PO();

    beforeEach(() => {
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
        cy.fixture('example').as('data');
    })

    it("Should be able to submit form", () => {
        cy.document().should('have.property', 'charset', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        cy.get('@data').then((data: any) =>{
            contactus_PO.contactForm_Submission(Cypress.env("first_name"),
                        data.last_name,
                        data.email,
                        "I would like to contact you",
                        'h1',
                        "Thank You for your Message!")
         });
    });

    it("Should not be able to submit form", () => {
        cy.get('@data').then((data:any)=>{
            contactus_PO.contactForm_Submission(data.first_name,
                                                data.last_name,
                                                " ",
                                                "I would like to contact you",
                                                'body',
                                                "Error: Invalid email address");
        });
    });
});

