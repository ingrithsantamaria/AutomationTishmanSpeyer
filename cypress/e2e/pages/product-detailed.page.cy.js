import { productDetailedPage } from "../components/product-detailed-page/product-detailed-page-component";
const productDetail = new productDetailedPage()
describe('RENAME ME!', () => {
  beforeEach(() => {
    cy.visit("/the-spiral/birch");
    cy.acceptCookiesIfExists()
    //cy.wait(15000);
  });
 
  it('User views the right panel', () => {
    productDetail.validateRightPanelPrice()
  })
  it('User views the form title', () => {
    productDetail.validateFormTitle()
  })
  it('User views the form capacity', () => {
    productDetail.validateFormCapacity()
  })
  it('User views the form Description', () => {
    productDetail.validateFormDescription()
  })
  it('User views the improvements in the form ', () => {
    productDetail.validateFormItems()
  })
  it('User displays the duration option in the right panel', () => {
    productDetail.randomOptionSelectDuration()
  })
  it('User selects a time', () => {
    productDetail.selectRandomNavbar()
    productDetail.selectRandomTime()
  })
  it('User selects Additional Services', () => {
    productDetail.validateAndClickAdditionalService()
  })
  it('User clicks on Inquire Button', () => {
    productDetail.validateAndClickInquireButton()
  })
  it('User clicks on Instant Book Button', () => {
    productDetail.selectRandomNavbar()
    productDetail.selectRandomTime()
    productDetail.validateAndClickInstantButton()
  })
})