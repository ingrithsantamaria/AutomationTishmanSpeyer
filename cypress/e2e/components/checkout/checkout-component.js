import { faker } from '@faker-js/faker'

class checkout {

    elements = {

          getH1LabelByText : (text) => cy.contains('h1', text),
          getH2LabelByText : (text) => cy.contains('h2', text),
          getH3LabelByText : (text) => cy.contains('h3', text),
          getH4LabelByText : (text) => cy.contains('h4', text),
          getLabelByText : (text) => cy.contains(text),
          getFirstNameLabel : () => cy.contains('First Name'),
          getLastNameLabel : () => cy.contains('Last Name'),
          getEmailNameLabel : () => cy.contains('Email'),
          getPhoneNumberLabel : () => cy.contains('Phone Number'),
          getCompanyNameLabel : () => cy.contains('Company Name'),
          getFirstNameField : () => cy.get('[id="firstName-field"]'),
          getLastNameField : () => cy.get('[id="lastName-field"]'),
          getEmailField : () => cy.get('[id="email-field"]'),
          getCompanyNameField : () => cy.get('[id="company-field"]'),
          getPhoneNumberField: () => cy.get('[id="phone-field"]'),
          getDiscountButton: () => cy.get('type="button"').contains('Discount Code'),
          getProceedToPaymentButton: () => cy.get('[type="submit"]').contains('Proceed to Payment'),
          getFirstNameField : () => cy.get('[id="firstName-field"]'),
          getLastNameField : () => cy.get('[id="lastName-field"]'),
          getEmailField : () => cy.get('[id="email-field"]'),
          getPhoneNumberField: () => cy.get('[id="phone-field"]'),
          getCompanyField: () => cy.get('[id="company-field"]'),
          getCompletePaymentButton: () => cy.get('[type="submit"]').contains('Complete payment'),
          getReservationDateAndTimeText: () => cy.get('[class="mb-2"]').children().eq(2),
          getFirstNameWarningMessage:()=> cy.get('[id="firstName-field-hints"]').contains('Please enter your first name.'),
          getLastNameWarningMessage:()=> cy.get('[id="lastName-field-hints"]').contains('Please enter your last name.'),
          getEmailWarningMessage:()=> cy.get('[id="email-field-hints"]').contains('Please enter your email.'),
          getPhoneNumberWarningMessage:()=> cy.get('[id="phone-field-hints"]').contains('Please enter a valid phone number in the following format: (000) 000-0000'),
    }

    fillContactInformationAndProceedToPayment = () => {

      this.elements.getFirstNameField().should('be.visible').type(faker.person.firstName())
      this.elements.getLastNameField().should('be.visible').type(faker.person.lastName())
      this.elements.getEmailField().should('be.visible').type(faker.internet.email())
      this.elements.getPhoneNumberField().should('be.visible').type('(001) 123-4567')
      this.elements.getCompanyField().should('be.visible').type(faker.company.name())
      this.elements.getProceedToPaymentButton().click({force: true})
    }

    fillCheckoutIframesInformation = () => {

      //IFRAME Waiting Time.
      cy.wait(5000)

      //ADDRESS INFORMATION.
      cy.get('.StripeElement').children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-addressLine1Input"]').type('29 Garden Avenue')
            cy.wrap($body).find('[id="Field-localityInput"]').type('Hawthorne')
            cy.wrap($body).find('[id="Field-administrativeAreaInput"]').select('New Jersey')
            cy.wrap($body).find('[id="Field-postalCodeInput"]').type('07506')
      })

      //CREDIT CARD INFORMATION.
      cy.get('[id="main-content"]').children().eq(0).children().eq(0).children().eq(2).children().eq(3).children().eq(1).children().eq(0).children().eq(0).its('0.contentDocument.body').should('be.visible').then(($body) => {
            cy.wrap($body).find('[id="Field-numberInput"]').type('4242 4242 4242 4242')
            cy.wrap($body).find('[id="Field-expiryInput"]').type('03 / 30')
            cy.wrap($body).find('[id="Field-cvcInput"]').type('999')
      })
    }
  }

  module.exports = new checkout();