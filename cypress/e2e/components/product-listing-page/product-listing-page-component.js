class productListingPage {
  elements = {
    getHeader: () => cy.get("#page-header"),
    getBookSpaceTitle: () => cy.contains("h1", "Book a Space"),
    getDeskButton: () => cy.get('div[class*="border-neutrals-"]').eq(0),
    getMeetingRoomButton: () => cy.get('div[class*="border-neutrals-"]').eq(1),
    getEventSpaceButton: () => cy.get('div[class*="border-neutrals-"]').eq(1),
    getOfficeButton: () => cy.get('svg[fill="none"]').eq(3),
    getSuiteButton: () => cy.get('div[class*="border-neutrals-"]').eq(4),
    getSwitchInstatBook: () => cy.get('div[id="or-filter-section-instant-book-switch-desktop"] label'),
    // getListProducts: () => cy.get('div.pb-10 pt-8')
  };
  clickAndValidateDeskButton = () => {
    this.elements.getDeskButton().should("be.visible").click({ force: true });
  };
  clickAndValidateMeetingRoomButton = () => {
    this.elements
      .getMeetingRoomButton()
      .should("be.visible")
      .click({ force: true });
  };
  clickAndValidateEventSpaceButton = () => {
    this.elements
      .getEventSpaceButton()
      .should("be.visible")
      .click({ force: true });
  };
  clickAndValidateOfficeButton = () => {
    this.elements.getOfficeButton().should("be.visible").click({ force: true });
  };
  clickAndValidateSuiteButton = () => {
    this.elements.getSuiteButton().should("be.visible").click({ force: true });
  };
  get quantityResultsByPage() {
    return cy.get("p.inline");
  }
  validateSpacesReturnResults = () => {
    // this.elements.getMeetingRoomButton().click();
    this.quantityResultsByPage
      .invoke("text")
      .as("resultsBefore")
      .then(() => {
        this.elements.getDeskButton().click();
        cy.wait(15000);
        this.quantityResultsByPage.invoke("text").as("resultsAfter");
      });
  };
  compareNumberResults = () => {
    cy.get("@resultsBefore").then((resultsBefore) => {
      cy.get("@resultsAfter").then((resultsAfter) => {
        expect(resultsBefore).not.to.eq(resultsAfter);
      });
    });
  };
  get elementsWithTag() {
    return cy.get('div[data-product=true]').contains('div', 'Instant book')
  }
  verifyChangesElements = () => {
    this.elements.getSwitchInstatBook().click()
    const tag = 'Instant book'
    return this.elementsWithTag.invoke('text').as('elementsBefore').then(() => {
      this.elements.getSwitchInstatBook().click()
      this.elementsWithTag.invoke('text').as('elementsAfter')
      this.elementsWithTag.filter(`:contains('${tag}')`).as('filteredElements')
    })
  };
  compareElements = () => {
    cy.get("@elementsBefore").then((elementsBefore) => {
      cy.get("@filteredElements").invoke('text').then((textFiltered) => {
        expect(elementsBefore.trim()).not.to.eq('')
        expect(textFiltered).to.include(elementsBefore.trim())
      });
    });
  };
}
module.exports = new productListingPage();
