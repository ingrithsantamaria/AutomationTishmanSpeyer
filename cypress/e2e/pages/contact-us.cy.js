import { validateBodyContactUs, fillContactUsInformation } from "../components/contact-us-page/contact-us-component";
describe('RENAME ME!', () => {
  beforeEach(() => {
    cy.visit("/contact");
    // cy.wait(15000);
    cy.acceptCookiesIfExists()
  });

  it('RENAME ME!', () => {
    validateBodyContactUs()
  })
  it('RENAME ME!', () => {
    fillContactUsInformation()
  })
})