export default class AutoStore_HomePage_PO {

    accessHomePage(){
        cy.visit("https://automationteststore.com/");
    }

    clickOn_HairCare_Link(){
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click(); 
    }
}