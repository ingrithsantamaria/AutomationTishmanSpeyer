import { clickAndValidateIconHome, clickAndValidateCoworkingButton, clickAndValidateOfficeSuites, clickAndValidateMeetingEvents, clickAndValidateVirtualOfficeButton, clickAndValidateOurCompanyButton } from "../components/global-components/header-component";
describe('RENAME ME!', () => {

  beforeEach(() => {
    //VISIT GOES HERE.
    cy.visit("/spaces?region=new-york")
    cy.wait(15000)
    cy.acceptCookiesIfExists()
  });
  it('RENAME ME!', () => {
    //User clicks on Icon header
    //clickAndValidateIconHome()

    //User clicks on CoworkingButton header
    // clickAndValidateCoworkingButton()

    //User clicks on Office Suites Button
    // clickAndValidateOfficeSuites()

    //User clicks on Meetings Buttons
    // clickAndValidateMeetingEvents()

    //User clicks on Virtual Office Button
    // clickAndValidateVirtualOfficeButton()

    //User clicks on Our Company Button
    //clickAndValidateOurCompanyButton()
  })
})