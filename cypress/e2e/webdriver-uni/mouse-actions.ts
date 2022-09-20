describe("Test mouse actions", () => {
    before( () => {
        cy.visit("/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true});
    });

    it("Drag and Drop", () => {
        cy.get('#draggable').trigger('mousedown', {which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
        cy.get('#droppable').should('contain', 'Dropped!');
    });

    it("Perform a double mouse click", () => {
       cy.get('#double-click').dblclick().should('have.class', 'div-double-click double');
    });

    it("Click and hold the left mouse click button on a given item", () => {
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element)=>{
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
        })
     });
})