describe.skip("https://docs.cypress.io/guides/references/assertions#BDD-Assertions", ()=>{
    const name = "Raul"
    const obj = {name: "Raul"}
    const otherObj = {a: {b: ['x', 'y']}}
    const array = [1,2]

    it("BDD - Chai assertions expect/should", ()=>{
        expect(name).not.to.eq('andrei');
        expect(obj).to.deep.eq({name: "Raul"});
        expect(otherObj).to.have.nested.property('a.b[1]');
        expect(otherObj).to.nested.include({'a.b[1]': 'y'});
        expect(array).to.have.ordered.members([1,2]).but.not.have.ordered.members([2,1]);
        expect(array).to.include.members([1,2])
        expect(otherObj).to.have.any.keys('a');
        expect(array).to.have.any.keys(1);
        expect(obj).to.have.all.keys('name');
        expect(name).to.be.a('string');
        expect(array).to.be.an('array')
        expect(array).to.include(1);
        expect(array).to.contain(2);
        expect(undefined).not.to.be.ok;
        expect(true).to.be.true;
        expect(false).to.be.false;
        expect(null).to.be.null;
        expect(undefined).to.be.undefined;
        expect(name).to.exist;
        expect(array).not.to.be.empty;
        expect(4).to.equal(4);
        expect(5).to.be.gt(3);
        expect(10).to.be.at.least(10);
        expect(1).to.be.lt(8);
        expect(name).to.have.length.at.most(4);
        expect(1).to.be.within(1,2);
        expect(array).to.be.instanceOf(Array);
        expect(otherObj).to.be.instanceOf(Object);
        expect(obj).to.have.property("name", "Raul");
        expect(otherObj).to.have.deep.property('a');
        expect('test').to.ownProperty('length');
        expect(obj).to.have.ownPropertyDescriptor('name');
        expect(name).to.have.lengthOf(4);
        expect(name).to.match(/^Ra/);
        expect(name).to.have.string('Ra');
        expect(otherObj).to.have.key('a');
        expect(1).to.satisfy((num)=>{return num >0});
        expect(3).to.be.closeTo(4, 1);
        expect(4).to.be.oneOf([1,2,3,4]);
    });

    it("Chai-Jquery", ()=>{
        cy.visit("https://webdriveruniversity.com/");
        cy.get('.thumbnail').first().then(($el)=>{
            expect($el).to.have.id('udemy-promo-thumbnail');
            expect($el).not.to.have.prop('disabled', false)
        });
        cy.get('[href="Contact-Us/contactus.html"]').as("Contact");
        cy.get('@Contact').then(($el)=>{
            expect($el).to.have.prop('target');
            expect($el).to.have.prop('target', '_blank');
            expect($el).to.include.text("CONTACT US");
            expect($el).not.contain("VALOARE");
            expect($el).to.have.css('text-decoration', 'none solid rgb(51, 122, 183)')
        });
        cy.get('@Contact').parent().then(($el)=>{
            expect($el).to.have.class('col-lg-12');
            expect($el).to.be.visible;
            expect($el).not.to.be.hidden;
            expect($el).to.have.descendants('div')
        });
        cy.get('#login-portal h1').invoke('text').should('include', 'LOGIN PORTAL')
    });

});

describe("https://docs.cypress.io/faq/questions/using-cypress-faq", ()=>{
    const title = 'Dropdown Menu(s), Checkboxe(s) & Radio Button(s)'
    const inputText = 'SearchText'

    it("How do I get an element's text contents?", ()=>{
        cy.navigateTo_WebdriverUni_Checkbox_Page();
        cy.get('#main-header').as('header');
        cy.get('@header').should('contain', title);
        cy.contains('h1', title);

        cy.get('@header').invoke('text').then(($header)=>{
            cy.get('@header').find('h1').invoke('text').should(($text)=>{
                expect($header).not.to.eq($text);
            })
        })
    });

    it("How do I get an input's value?", ()=>{
        cy.visit("https://automationteststore.com/");
        cy.get('#filter_keyword').as('input');
        cy.get('@input').clear().type(inputText).should('have.value', inputText);
        cy.get('@input').clear().type(inputText).invoke('val').then(($val1)=>{
            cy.get('@input').type('{enter}');
            cy.get('@input').invoke('val').should(($val2)=>{
                expect($val1).not.to.eq($val2);
            });
        });
    });

    it.skip("Can I dynamically test multiple viewports?",()=>{
        const sizes: any[] = ['iphone-6', 'ipad-2',[1024,768]];

        sizes.forEach((size)=>{
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            cy.visit('https://www.cypress.io')
            cy.get('#logo').should('be.visible')
            
        })
    });

    it.skip("How do I prevent the application from opening a new browser window?", ()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#button-clicks').should(($btn) =>{
            $btn.attr('target', '_self')
        }).click();
    })
});
   
