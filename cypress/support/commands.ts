// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';

declare global {
    namespace Cypress {
        interface Chainable{
        selectProduct: typeof selectProduct;
        addProductToBasket: typeof addProductToBasket;
        navigateTo_WebdriverUni_Homepage: typeof navigateTo_WebdriverUni_Homepage;
        navigateTo_WebdriverUni_Checkbox_Page: typeof navigateTo_WebdriverUni_Checkbox_Page;
        navigateTo_WebdriverUni_Button_Clicks: typeof navigateTo_WebdriverUni_Button_Clicks;
        }
    }
}

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

export const selectProduct = (productName: string) =>{
    cy.get(".fixed_wrapper .prdocutname").each(($el) => {
        if($el.text().includes(productName)){
            cy.wrap($el).click();
        }
    });
}

export const addProductToBasket = (productName: string) =>{
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text() === productName){
            cy.log($el.text());
            cy.get('.productcart').eq(index).click();
        }
    });
}

export const navigateTo_WebdriverUni_Homepage = () =>{
    cy.visit('/');
}

export const navigateTo_WebdriverUni_Checkbox_Page = () =>{
    cy.visit('/' + 'Dropdown-Checkboxes-RadioButtons/index.html');
}

export const navigateTo_WebdriverUni_Button_Clicks = () =>{
    cy.visit('/' + 'Click-Buttons/index.html');
}

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('selectProduct', selectProduct);
Cypress.Commands.add('addProductToBasket', addProductToBasket);
Cypress.Commands.add('navigateTo_WebdriverUni_Homepage', navigateTo_WebdriverUni_Homepage);
Cypress.Commands.add('navigateTo_WebdriverUni_Checkbox_Page', navigateTo_WebdriverUni_Checkbox_Page);
Cypress.Commands.add('navigateTo_WebdriverUni_Button_Clicks', navigateTo_WebdriverUni_Button_Clicks);
