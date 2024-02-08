import { productDataDesk, getProductsMeetings, routeProductDesk } from "../components/common/data-provider";
import {selectDesk, selectProductDesk, selectMeetingRoom,selectProductMeeting} from "../components/product-listing-page/product-listing-page-component";
//import { productDataDesk } from "../components/common/data-provider";
describe('RENAME ME!', () => {

  beforeEach(() => {
    //VISIT GOES HERE.
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/spaces?region=new-york")
    cy.acceptCookiesIfExists()
    cy.wait(15000)
  });

  it('Home', () => {
    selectDesk()
    cy.url().should('include', "&type=hot_desk")
  })
  it('Select Product', () => {
    let route = routeProductDesk.gerRandomRouteProduct()
    selectDesk()
    cy.wait(15000)
    selectProductDesk(route)
  })
  // it("Home Meeting Room", () => {
  //   selectMeetingRoom()
  // })
  // it("Home Meeting Room select", () => {
  //   selectMeetingRoom()
  //   selectProductMeeting()
  // })
})