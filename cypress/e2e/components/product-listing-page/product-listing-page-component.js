class productListingPage {

    elements = {
          getHeader : () => cy.get("#page-header"),
          getBookSpaceTitle : () => cy.contains('h1', 'Book a Space'),
          getDeskButton : () => cy.get('div[class*="border-neutrals-"]').eq(0),
          getMeetingRoomButton : () => cy.get('div[class*="border-neutrals-"]').eq(1),
          getEventSpaceButton : () => cy.get('div[class*="border-neutrals-"]').eq(1),
          getOfficeButton : () => cy.get('svg[fill="none"]').eq(3),
          getSuiteButton : () => cy.get('div[class*="border-neutrals-"]').eq(4),
          getProducts : () => cy.get('div[data-detail="capacity"]')
      }
    selectDesk = () => {
      this.elements.getDeskButton().should("be.visible").click({force:true})
    }
    selectProductDesk = (idProduct) => {
      this.elements.getProducts().find(`a[href="/new/${idProduct}/desk"`).click({force:true})
    }
  }
  module.exports = new productListingPage();