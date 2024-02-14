import { validateBodyContactUs, fillContactUsInformation, formWithEmptyFields,formatEmailIncorrect } from "../components/contact-us-page/contact-us-component";
describe('RENAME ME!', () => {
  beforeEach(() => {
    cy.visit("/contact");
    // cy.wait(15000);
    cy.acceptCookiesIfExists()
  });

  it('Validate Body the Contact US', () => {
    validateBodyContactUs()
  })
  it('Fill out form Contact US', () => {
    fillContactUsInformation()
  })
  it('Form with empty fields ("FirstName")', () => {
    formWithEmptyFields()
  })
  it('Incorrect Email format"', () => {
    formWithEmptyFields()
  })
})