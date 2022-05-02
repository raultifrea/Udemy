export default class ContactUs_PO {

     contactForm_Submission(firstName: string, lastName:string, email: string, comment: string, $selector: string, textToLocate: string) {
        cy.get("[name='first_name']").type(firstName);
        cy.get("[name='last_name']").type(lastName);
        cy.get("[name='email']").type(email);
        cy.get("[name='message']").type(comment);
        cy.get("[type='submit']").click();
        cy.get($selector).contains(textToLocate, {timeout: 60000});
        cy.screenshot("Made a contact us form submission");
    }
}