const { routeProductDesk, routeProductMeeting } = require("../common/data-provider")
class productListingPage {
    elements = {
          getHeader : () => cy.get("#page-header"),
          getBookSpaceTitle : () => cy.contains('h1', 'Book a Space'),
          getDeskButton : () => cy.get('div[class*="border-neutrals-"]').eq(0),
          getMeetingRoomButton : () => cy.get('div[class*="border-neutrals-"]').eq(1),
          getEventSpaceButton : () => cy.get('div[class*="border-neutrals-"]').eq(1),
          getOfficeButton : () => cy.get('svg[fill="none"]').eq(3),
          getSuiteButton : () => cy.get('div[class*="border-neutrals-"]').eq(4),
      }
    selectDesk = () => {
      this.elements.getDeskButton().should("be.visible").click({force:true})
    }
    selectProductDesk = (route) => {
      cy.get(`a[href="/new/${route}/desk"]`).click({force:true, multiple: true})
    }
    selectMeetingRoom = () => {
      this.elements.getMeetingRoomButton().should("be.visible").click({force:true})
    }
    selectProductMeeting = (route) => {
      cy.get(`a[href="/new/${route}"]`).click({force:true, multiple: true})
    }
  }
  module.exports = new productListingPage();