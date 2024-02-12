import { clickAndValidateIconHome, clickAndValidateCoworkingButton } from "../components/global-components/header-component";
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
    //clickAndValidateCoworkingButton()
  })
})