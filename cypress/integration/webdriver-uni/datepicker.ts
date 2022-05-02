describe("Test Datepicker via webdriveruni", () => {
    before(()=>{
        cy.visit("/");
        cy.get("#datepicker").invoke('removeAttr', 'target').click({force:true});
    })
    it("Select date from the datepicker", () => {
    //    var date = new Date();
    //    cy.log(`${date.getDate()}`)
    //    date.setDate(date.getDate())         //get current day i.e 15

    //    var date = new Date();
    //    cy.log(`${date.getDate() + 5}`)
    //    date.setDate(date.getDate() + 5)     //get current day i.e 15 + 5 = 20

    cy.get('#datepicker').click();
    var date = new Date();
    date.setDate(date.getDate() + 138);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", {month: "long"});
    var futureDay = date.getDate();

    // cy.log(`${futureYear}`)
    // cy.log(`${futureMonth}`)
    // cy.log(`${futureDay}`)

    function selectMonthAndYear() {
        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
            if(!currentDate.text().includes(futureYear.toString())){
                cy.get('.next').first().click();
                selectMonthAndYear();
            }
        }).then(()=>{
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
                if(!currentDate.text().includes(futureMonth)){
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            })
        })
    }

    function selectFutureDay(){
        cy.get('[class="day"]').contains(futureDay).click();
    }

    selectMonthAndYear();
    selectFutureDay();
    });
})