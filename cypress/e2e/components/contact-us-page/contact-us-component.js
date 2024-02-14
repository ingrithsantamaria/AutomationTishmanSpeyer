import { faker } from '@faker-js/faker'
class contact {
    elements = {
          getFirstNameField : () => cy.get('[id="firstName-field"]'),
          getLastNameField : () => cy.get('[id="lastName-field"]'),
          getEmailField : () => cy.get('[id="email-field"]'),
          getPhoneNumberField: () => cy.get('[id="phone-field"]'),
          getNavBarOption1: () => cy.contains('span', 'I have a general inquiry'),
          getNavBarOption2: () => cy.get('button[data-tab="true"] span').eq(1)
    }
    validateBodyContactUs = () => {
      cy.get('body').contains('h1', 'Contact Us')
      cy.get('body').contains('h2', 'Connect With Us')
      const rightPanelElements = [
            'Office Hours',
            'Monday to Friday',
            '9 a.m. to 5 p.m. ET',
            'Address',
            '66 Hudson Blvd E',
            '23rd Floor',
            'New York, NY 10001, USA',
            'General Inquiries',
            'info@yourstudio.com',
            '212-523-0850',
            'Brokers',
            'brokers@yourstudio.com'
      ]
      rightPanelElements.forEach((value) => {
            cy.get('p').should('contain', value)
      })
    }
    fillContactUsInformation = () => {
      this.elements.getFirstNameField().should('be.visible').type(faker.person.firstName())
      this.elements.getLastNameField().should('be.visible').type(faker.person.lastName())
      this.elements.getEmailField().should('be.visible').type(faker.internet.email())
      this.elements.getPhoneNumberField().should('be.visible').type(faker.phone.number())
      const randomOptionNavBar = Math.random() < 0.5 ? this.elements.getNavBarOption1() : this.elements.getNavBarOption2()
      randomOptionNavBar.click()
    }
  }
  module.exports = new contact();