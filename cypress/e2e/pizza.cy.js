/// <reference types="cypress" />

describe("app works", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
  });
});

describe("forma gidiyor", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  /* sipariş Ver sayfasına git */
  it("form doldurulunca sipariş verilebiliyor", () => {
    cy.get('[data-cy="mainpage-button"]').click()
    cy.get('[data-cy="pizza-boyut-kucuk"]').click()
    cy.get('select').select("Orta")
    

  });


});

