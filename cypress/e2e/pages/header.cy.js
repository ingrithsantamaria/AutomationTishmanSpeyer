import {
  clickAndValidateIconHome,
  clickAndValidateCoworkingButton,
  clickAndValidateOfficeSuites,
  clickAndValidateMeetingEvents,
  clickAndValidateVirtualOfficeButton,
  clickAndValidateOurCompanyButton,
  clickAndValidateCoworkingFooter
} from "../components/global-components/header-component";
describe("RENAME ME!", () => {
  beforeEach(() => {
    cy.visit("/spaces?region=new-york");
    cy.wait(15000);
    cy.acceptCookiesIfExists();
  });
  it("User clicks on Icon header", () => {
    clickAndValidateIconHome()
  });
  it("User clicks on CoworkingButton header", () => {
    clickAndValidateCoworkingButton()
  });
  it("User clicks on Office Suites Button", () => {
    clickAndValidateOfficeSuites()
  });
  it("User clicks on Meetings Buttons", () => {
    clickAndValidateMeetingEvents()
  });
  it("User clicks on Virtual Office Button", () => {
    clickAndValidateVirtualOfficeButton()
  });
  it("User clicks on Our Company Button", () => {
    clickAndValidateOurCompanyButton()
  });
});
