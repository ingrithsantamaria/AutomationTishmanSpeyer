import {
  clickAndValidateDeskButton,
  clickAndValidateMeetingRoomButton,
  clickAndValidateEventSpaceButton,
  clickAndValidateOfficeButton,
  clickAndValidateSuiteButton,
  selectProductDesk,
  selectProductMeeting,
} from "../components/product-listing-page/product-listing-page-component";
describe("RENAME ME!", () => {
  beforeEach(() => {
    cy.acceptCookiesIfExists();
    cy.visit("/spaces?region=new-york");
    cy.wait(15000);
  });
  it("User clicks on Desk Button", () => {
    clickAndValidateDeskButton();
  });
  // it("Select Product Desk", () => {
  //   clickAndValidateDeskButton();
  //   cy.wait(15000);
  //   selectProductDesk();
  // });
  it("User clicks on Meeting Room", () => {
    clickAndValidateMeetingRoomButton();
  });
  // it("Select Product Meeting Room", () => {
  //   clickAndVAlidateMeetingRoom();
  //   cy.wait(15000);
  //   selectProductMeeting();
  // });
  it("User clicks on Event Space Button", () => {
    clickAndValidateEventSpaceButton();
  });
  it("User clicks on Office Button", () => {
    clickAndValidateOfficeButton();
  });
  it("User clicks on Suite Button", () => {
    clickAndValidateSuiteButton();
  });
});
