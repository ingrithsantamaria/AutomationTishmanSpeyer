class productListingPage {
  elements = {
    getHeader: () => cy.get("#page-header"),
    getBookSpaceTitle: () => cy.contains("h1", "Book a Space"),
    getDeskButton: () => cy.get('div[class*="border-neutrals-"]').eq(0),
    getMeetingRoomButton: () => cy.get('div[class*="border-neutrals-"]').eq(1),
    getEventSpaceButton: () => cy.get('div[class*="border-neutrals-"]').eq(1),
    getOfficeButton: () => cy.get('svg[fill="none"]').eq(3),
    getSuiteButton: () => cy.get('div[class*="border-neutrals-"]').eq(4),
  };
  clickAndValidateDeskButton = () => {
    this.elements.getDeskButton().should("be.visible").click({ force: true });
  };
  // selectProductDesk = () => {
  //   let route = routeProductDesk.gerRandomRouteProduct();
  //   cy.get(`a[href="/new/${route}/desk"]`).click({
  //     force: true,
  //     multiple: true,
  //   });
  clickAndValidateMeetingRoomButton = () => {
    this.elements
      .getMeetingRoomButton()
      .should("be.visible")
      .click({ force: true });
  };
  // selectProductMeeting = () => {
  //   let route = routeProductMeeting.getRandomRouteProductsMeetings();
  //   cy.get(`a[href="/new/${route}"]`).click({ force: true, multiple: true });
  // };
  clickAndValidateEventSpaceButton = () => {
    this.elements
      .getEventSpaceButton()
      .should("be.visible")
      .click({ force: true });
  };
  clickAndValidateOfficeButton = () => {
    this.elements
      .getOfficeButton()
      .should("be.visible")
      .click({ force: true });
  };
  clickAndValidateSuiteButton = () => {
    this.elements
      .getSuiteButton()
      .should("be.visible")
      .click({ force: true });
  };
}
module.exports = new productListingPage();
