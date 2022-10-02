describe("Handle JS alerts", () => {
    it("Confirm JS alerts contains the correct text", () => {
        cy.visit("/");
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true});

        cy.get('#button1').click();
        cy.on('window:alert', (str) =>{
            expect(str).to.eq('I am an alert box!');
        });
    });

    it("Validate js confirm alert box when clicking OK", () => {
        cy.visit("/");
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true});
        cy.get('#button4').click();
        cy.on('window:confirm', () =>{
            return true                                                       //clicks OK
        });
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });

    it("Validate js confirm alert box when clicking Cancel", () => {
        cy.visit("/");
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true});
        cy.get('#button4').click();
        cy.on('window:confirm', () =>{
            return false;                                                 //clicks Cancel
        });
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    });
    
    it("Validate js confirm alert box using a stub", () => {
        cy.visit("/");
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true});

        const stub = cy.stub();
        cy.on('window:confirm', stub);
        cy.get('#button4').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        }).then(() => {
            return true;                                                // clicks OK in the confirm prompt
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        })
    });
})