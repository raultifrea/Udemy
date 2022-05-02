describe("Handling data over webdriver uni", () => {
    beforeEach(() => {
        cy.visit("/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
      it("Calculate and assert the total age of all users", () => {
        let userDetails: string[] = [];
        let numb = 0;
        let ageTotal = 322;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() =>{
            for(let i = 0; i < userDetails.length; i++){
                if(Number(userDetails[i])){
                    numb += Number(userDetails[i]);
                }
            }
        }).then(() =>{
            expect(numb).to.eq(ageTotal)
        })
      });

      it.only("Calculate and assert the age of a given user baased on last name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').as('column');
        cy.get('@column').each(($el, index, $list) => {
            const text = $el.text();
            if(text.includes("Woods")){
                cy.log(`Index is: ${index}`)
                cy.get('@column').eq(index).next().then((age) =>{
                    const userAge = age.text();
                    expect(userAge).to.eq("80");
                })
            }
        });

    });
  });
    