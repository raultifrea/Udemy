
describe("Alias and Invoke", () => {
    beforeEach(() => {
      cy.visit("https://automationteststore.com/");
    });
  
    it("Validate a specific haircare product", () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('equal', "Seaweed Conditioner");
    });

    it("Validate other stuff", () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get(".thumbnail").as('productsNumber');
        cy.get('@productsNumber').its('length').should('eq', 8);

        // cy.get('.productcart').eq(0).invoke('attr', 'title').should('eq', 'Add to Cart');
        cy.get('@productsNumber').find('.productcart').invoke('attr', 'title').should('eq', 'Add to Cart');
    });

    it.only("Calculate total of normal and sale products", () => {
      cy.get(".thumbnail").as('productsThumbnail');
      cy.get('@productsThumbnail').find('.oneprice').invoke('text').as('itemPrice');
      cy.get('@productsThumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
      var itemsTotal = 0;
      cy.get('@itemPrice').then($linkText => {
        var itemsPriceTotal = 0;
        var itemPrice = $linkText.text().split('$'); //doesnt work with text() remove text() to work but show errors
        var i;
        for(i = 0; i < itemPrice.length; i++){
          itemsPriceTotal += Number(itemPrice[i]);
        }
        itemsTotal += itemsPriceTotal;
      });

      cy.get('@saleItemPrice').then($linkText => {
        var saleItemsPrice = 0
        var saleItemPrice = $linkText.text().split('$'); //doesnt work with text() remove text() to work but show errors
        var i;
        for(i=0; i < saleItemPrice.length; i++){
          saleItemsPrice += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemsPrice;
      })
    .then(() => {
      cy.log("The total price of all products: "+ itemsTotal);
      expect(itemsTotal).to.equal(648.5);
    })
  });
});
  