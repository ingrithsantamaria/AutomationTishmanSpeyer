import {
  clickAndValidateDeskButton,
  clickAndValidateMeetingRoomButton,
  clickAndValidateEventSpaceButton,
  clickAndValidateOfficeButton,
  clickAndValidateSuiteButton,
  validateSpacesReturnResults,
  compareNumberResults,
  verifyChangesElements,
  compareElements,
  verifyCitiesCombo,
  verifyBuildingsByCity
} from "../components/product-listing-page/product-listing-page-component";
describe("RENAME ME!", () => {
  beforeEach(() => {
    cy.acceptCookiesIfExists();
    cy.visit("/spaces?region=new-york");
    cy.wait(15000);
  });
  it("Verify building options by city", () => {
    verifyBuildingsByCity();
  });
  it("User clicks on Desk Button", () => {
    clickAndValidateDeskButton();
  });
  it("User clicks on Meeting Room", () => {
    clickAndValidateMeetingRoomButton();
  });
  it("User clicks on Event Space Button", () => {
    clickAndValidateEventSpaceButton();
  });
  it("User clicks on Office Button", () => {
    clickAndValidateOfficeButton();
  });
  it("User clicks on Suite Button", () => {
    clickAndValidateSuiteButton();
  });
  it("User clicks on Toogle and sees the updates products ", () => {
    verifyChangesElements();
    compareElements();
  });
  it("User clicks on any type space and sees all the cities", () => {
    verifyCitiesCombo();
  });
  it("Validate number of results displayed in each type of space", () => {
    clickAndValidateMeetingRoomButton()
    validateSpacesReturnResults();
    compareNumberResults();
  });
});
