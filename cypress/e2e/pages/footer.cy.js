import { clickAndValidateCoworkingFooter, openAndValidateNewWindowCoworking } from "../components/global-components/footer-component";
describe('RENAME ME!', () => {
  beforeEach(() => {
    //VISIT GOES HERE.
    cy.visit("/spaces?region=new-york");
    cy.wait(15000);
    cy.acceptCookiesIfExists()
  });
  it('RENAME ME!', () => {
    openAndValidateNewWindowCoworking()
    //clickAndValidateCoworkingFooter()
  })
})