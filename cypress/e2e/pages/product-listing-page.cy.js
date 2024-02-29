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
  verifyBuildingsByCity,
  validateResultsForSpaceTypes
} from "../components/product-listing-page/product-listing-page-component";
describe("RENAME ME!", () => {
  beforeEach(() => {
    cy.visit("/spaces?region=new-york");
    cy.wait(15000);
    cy.acceptCookiesIfExists()
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
  it("Verify building options by city", () => {
    verifyBuildingsByCity();
  });
  it("User clicks on Desk space and sees all the cities", () => {
    clickAndValidateDeskButton()
    verifyCitiesCombo();
  });
  it("User clicks on Meeting room space and sees all the cities", () => {
    clickAndValidateMeetingRoomButton()
    verifyCitiesCombo();
  });
  it("User clicks on Event space and sees all the cities", () => {
    clickAndValidateEventSpaceButton()
    verifyCitiesCombo();
  });
  it("User clicks on Office space and sees all the cities", () => {
    clickAndValidateOfficeButton()
    verifyCitiesCombo();
  });
  it("User clicks on Suite space and sees all the cities", () => {
    clickAndValidateSuiteButton()
    verifyCitiesCombo();
  });
  it("User clicks on Toogle and sees the updates products on Desk Site ", () => {
    clickAndValidateDeskButton()
    verifyChangesElements();
    compareElements();
  });
  it("User clicks on Toogle and sees the updates products on Meeting room Site ", () => {
    clickAndValidateMeetingRoomButton()
    verifyChangesElements();
    compareElements();
  });
  it("User clicks on Toogle and sees the updates products on Event Space Site ", () => {
    clickAndValidateEventSpaceButton()
    verifyChangesElements();
    compareElements();
  });
  it("User clicks on Toogle and sees the updates products on Office Site ", () => {
    clickAndValidateOfficeButton()
    verifyChangesElements();
    compareElements();
  });
  it("User clicks on Toogle and sees the updates products on Suite Site ", () => {
    clickAndValidateSuiteButton()
    verifyChangesElements();
    compareElements();
  });
  it("Validate number of results displayed in each type of space", () => {
    clickAndValidateMeetingRoomButton()
    validateSpacesReturnResults();
    compareNumberResults();
    // const totalSpaces = 5
    // cy.wait(15000)
    // validateResultsForSpaceTypes(totalSpaces)
  });
});
