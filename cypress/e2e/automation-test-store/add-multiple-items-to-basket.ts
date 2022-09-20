import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
import AutoStore_HomePage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";

describe("Add multiple items to basket", () => {

  const autoStore_homePage_PO = new AutoStore_HomePage_PO();
  const autoStore_hairCare_PO = new AutoStore_HairCare_PO();

  before(() => {
    cy.fixture("products").as("data");
  });

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    autoStore_homePage_PO.accessHomePage();
    autoStore_homePage_PO.clickOn_HairCare_Link();
  });

  it("Add specific items to basket", () => {
    autoStore_hairCare_PO.addHairCareProductsToBasket();
    cy.get(".dropdown-toggle > .label").contains("3").click().debug();  //will only appear if dev tools/sources is opened
    cy.url().should("include", "checkout/cart");
  });
});
