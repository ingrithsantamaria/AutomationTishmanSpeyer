import { routeProductDesk, routeProductMeeting } from "../components/common/data-provider";
import {selectDesk, selectProductDesk, selectMeetingRoom,selectProductMeeting, clickBookSpaceButton} from "../components/product-listing-page/product-listing-page-component";
//import { productDataDesk } from "../components/common/data-provider";
describe('RENAME ME!', () => {
  beforeEach(() => {
    //VISIT GOES HERE.
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    // cy.clearCookies()
    // cy.clearLocalStorage()
    cy.acceptCookiesIfExists()
    cy.visit("/spaces?region=new-york")
    cy.wait(15000)
  });
  it('Home Desk', () => {
    selectDesk()
    cy.url().should('include', "&type=hot_desk")
  })
  it('Select Product', () => {
    selectDesk()
    cy.wait(15000)
    let route = routeProductDesk.gerRandomRouteProduct()
    selectProductDesk(route)
  })
  it('Home Meeting Room', () => {
    selectDesk()
    cy.url().should('include', "&type=hot_desk")
  })
  it('Select Product Meeting Room', () => {
    let route = routeProductMeeting.getRandomRouteProductsMeetings()
    selectMeetingRoom()
    cy.wait(15000)
    selectProductMeeting(route)
  })
})