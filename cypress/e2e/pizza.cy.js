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
    cy.get('[data-cy="malzemeler"] .material-item input[type="checkbox"]').eq(0).check();
    cy.get('[data-cy="malzemeler"] .material-item input[type="checkbox"]').eq(5).check();
    cy.get('[data-cy="malzemeler"] .material-item input[type="checkbox"]').eq(2).check();
    cy.get('[data-cy="malzemeler"] .material-item input[type="checkbox"]').eq(7).check();
    cy.get('[data-cy="isim-soyisim"]').type('İlsu Sunal');
    cy.get('[data-cy="siparis-notu"]').type("Pizzalardan birinde domates olmasın.");
    cy.get('.sayac-container').contains('button', '+').click();
    cy.get('.siparis-container').contains('button', 'SİPARİŞ VER').click();
  });


});

