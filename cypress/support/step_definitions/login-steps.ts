import { Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

let stub: any;

Before(() => {
    stub = cy.stub();
});

Given('I access the Webdriver University Login Portal page',  () => {
    cy.visit('https://webdriveruniversity.com/Login-Portal/index.html');
});

When('I enter a username {string}', (userName) => {
    cy.get('#text').type(userName);
});

And('I enter a password {string}', (password) => {
    cy.get('#password').type(password, {log: false});
});

And('I click on the login button', () => {
    cy.get('#login-button').click();
    cy.on('window:alert', stub);
});

Then('I should be presented with the following message {string} {string}', (message, message2) => {
    const expectedMessage = message + " " + message2;
    expect(stub.getCall(0)).to.be.calledWith(expectedMessage);
});