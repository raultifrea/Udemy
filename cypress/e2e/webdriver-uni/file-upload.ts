describe("Test File Upload via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
    })
      it("Upload a file....", () => {
        cy.fixture('raul.png', 'base64').then(fileContent => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "raul.png",
                    mimeType: "image/png"
                },
                // {
                //     uploadType: "input"
                // }
            )
        })
        cy.get('#submit-button').click();
      });

      it("Upload no file....", () => {
        cy.get('#submit-button').click();
      });

  });