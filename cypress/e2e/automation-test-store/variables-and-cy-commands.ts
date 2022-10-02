describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/');
        //THIS SUCCEEDS:
        //const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup');
        //makeupLink.click();
        //const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare');
        //skincareLink.click();

        //THIS FAILS:
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup');
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare');
        // makeupLink.click();
        // skincareLink.click();

        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        cy.get("a[href*='product/category&path=']").contains('Skincare').click();
    });

    it("Navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();

        //THIS FAILS:
        // const header = cy.get('h1 .maintext');
        // cy.log(header.text());

        cy.get('h1 .maintext').then($headerText =>{
            const headerText = $headerText.text();
           cy.log(`Found header text: ${headerText}`);
           expect(headerText).to.eq('Makeup');
        });
    });

    it("Validate properties of the contact us page", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        
        // using cypress commands and chaining
        cy.contains('#ContactUsFrm', 'contact us form', {matchCase: false}).find('#field_11').should('contain', 'First name');

        //JQuery approach
        cy.contains('#ContactUsFrm', 'contact us form', {matchCase: false}).then(text =>{
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name');
            
            //Embeded commands (closures)
            cy.get('#field_11').then(fnText =>{
                cy.log(fnText.text());
            });

        })
    });
}); 