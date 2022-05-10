describe("JSON Object", () => {
    it("JSON Object examples", () => {
        const exampleObject = {"key":"Tim", "key2": "Jones"}
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]
        const exampleArrayOfObjects = [
            {
                "key": "value"
            },
            {
                "cheie": "valoare"
            },
            {
                "another_key": "another_value"
            }
        ]

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }
            ]
        }

        cy.log(exampleObject.key); // Same as: cy.log(exampleObject["key"]);
        cy.log(exampleObject.key2); //Same as: cy.log(exampleObject["key2"]);

        cy.log(exampleArrayOfValues[0]); //Sophie
        cy.log(exampleArrayOfValues[1]); //Rose
        cy.log(exampleArrayOfValues[2]); //Howard

        cy.log(users.Students[0].lastName); //Blogs2

        cy.log(`${exampleArrayOfObjects[0].key}`)
        cy.log(`${exampleArrayOfObjects[1].cheie}`)
        cy.log(`${exampleArrayOfObjects[2].another_key}`)

    });
})