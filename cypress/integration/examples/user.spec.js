/// <reference types="cypress" />
const getByTestId = id => cy.get(`[data-cy="${id}"]`);
const getByNameTag = id => cy.get(`[name="${id}"]`);

context('user list stories', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200').then(() => {
      cy.get(".toast-success").should("be.visible");
    });
  })

  it("it should route user list", () => {
    getByTestId("Kullanıcılar")
      .should("exist")
      .then(() => {
        getByTestId("Kullanıcılar")
          .first()
          .click({
            force: true
          });
      });
  });

  it('addButton Click', () => {
    getByTestId("Kullanıcılar")
      .should("exist")
      .then(() => {
        getByTestId("Kullanıcılar")
          .first()
          .click({
            force: true
          });
        cy.get('.add-button').click().then(() => {
          cy.get(".user-list-item").should("be.visible")
        });
      });
  })
})
