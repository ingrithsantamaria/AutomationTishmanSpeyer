import { productDataDesk } from "../components/common/data-provider";
import {selectDesk, selectProductDesk} from "../components/product-listing-page/product-listing-page-component";
//import { productDataDesk } from "../components/common/data-provider";
describe('RENAME ME!', () => {

  beforeEach(() => {
    //VISIT GOES HERE.
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/spaces?region=new-york")
    cy.acceptCookiesIfExists()
  });

  it('Home', () => {
    selectDesk()
    cy.url().should('include', "&type=hot_desk")
  })
  it('Select Product', () => {
    let product = productDataDesk.gerRandomProduct()
    selectDesk()
    selectProductDesk(product)
  })
})