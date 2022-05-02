export default class AutoStore_HairCare_PO {

    addHairCareProductsToBasket() {
        cy.get("@data").then((data: any) => {
            data.productName.forEach(function (element: any) {
                cy.addProductToBasket(element)
                //will only appear if dev tools/sources is opened
                // .then(()=>{
                //     debugger
                // })
            });
        });
    }
}