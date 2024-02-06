class contact {

    elements = {

          getFirstNameField : () => cy.get('[id="firstName-field"]'),
          getLastNameField : () => cy.get('[id="lastName-field"]'),
          getEmailField : () => cy.get('[id="email-field"]'),
          getPhoneNumberField: () => cy.get('[id="phone-field"]'),
    }
  }

  module.exports = new contact();