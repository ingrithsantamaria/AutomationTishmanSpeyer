import { header } from "../components/global-components/header-component";
const headerPage = new header()
describe("RENAME ME!", () => {
  beforeEach(() => {
    cy.visit("/spaces?region=new-york");
    cy.wait(15000);
    cy.acceptCookiesIfExists();
  });
  it("User clicks on Icon header", () => {
    headerPage.clickAndValidateIconHome()
  });
  it("User clicks on CoworkingButton header", () => {
    headerPage.clickAndValidateCoworkingButton()
  });
  it("User clicks on Office Suites Button", () => {
    headerPage.clickAndValidateOfficeSuites()
  });
  it("User clicks on Meetings Buttons", () => {
    headerPage.clickAndValidateMeetingEvents()
  });
  it("User clicks on Virtual Office Button", () => {
    headerPage.clickAndValidateVirtualOfficeButton()
  });
  it("User clicks on Our Company Button", () => {
    headerPage.clickAndValidateOurCompanyButton()
  });
});
