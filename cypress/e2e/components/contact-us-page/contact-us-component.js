import { faker } from "@faker-js/faker";
class contact {
  elements = {
    getFirstNameField: () => cy.get('[id="firstName-field"]'),
    getLastNameField: () => cy.get('[id="lastName-field"]'),
    getEmailField: () => cy.get('[id="email-field"]'),
    getPhoneNumberField: () => cy.get('[id="phone-field"]'),
    getNavBarOption1: () => cy.contains("span", "I have a general inquiry"),
    getNavBarOption2: () => cy.get('button[data-tab="true"] span').eq(1),
    getTextArea: () => cy.get("textarea#assistDetails-field"),
    getCheckBoxReceiveMail: () => cy.get('button[role="switch"]'),
    getListLocation: () => cy.get('button[aria-haspopup="listbox"]'),
    getSubmit: () => cy.get('button[type="submit"]'),
    getMessageSuccess: () => cy.get('div[class*="bg-feedback-positive-"]'),
    getMessageError: () => cy.get('div#tm-contact-error-notification')
  };
  validateBodyContactUs = () => {
    cy.get("body").contains("h1", "Contact Us");
    cy.get("body").contains("h2", "Connect With Us");
    const rightPanelElements = [
      "Office Hours",
      "Monday to Friday",
      "9 a.m. to 5 p.m. ET",
      "Address",
      "66 Hudson Blvd E",
      "23rd Floor",
      "New York, NY 10001, USA",
      "General Inquiries",
      "info@yourstudio.com",
      "212-523-0850",
      "Brokers",
      "brokers@yourstudio.com",
    ];
    rightPanelElements.forEach((value) => {
      cy.get("p").should("contain", value);
    });
  };
  fillContactUsInformation = () => {
    this.elements
      .getFirstNameField()
      .should("be.visible")
      .type(faker.person.firstName());
    this.elements
      .getLastNameField()
      .should("be.visible")
      .type(faker.person.lastName());
    this.elements
      .getEmailField()
      .should("be.visible")
      .type(faker.internet.email());
    this.elements
      .getPhoneNumberField()
      .should("be.visible")
      .type(faker.string.numeric('(000) 000-0000'));
    this.selectRamdonNavBar();
    this.elements.getSubmit().should('be.visible').click({force: true})
    this.elements.getMessageSuccess().should('be.visible').contains('button', 'Dismiss').click()
  };
  formWithEmptyFields = () => {
      this.elements
        .getLastNameField()
        .should("be.visible")
        .type(faker.person.lastName());
      this.elements
        .getEmailField()
        .should("be.visible")
        .type(faker.internet.email());
      this.elements
        .getPhoneNumberField()
        .should("be.visible")
        .type(faker.string.numeric('(000) 000-0000'));
      this.selectRamdonNavBar();
      this.elements.getSubmit().should('be.visible').click()
      this.elements.getMessageError().should('be.visible').contains('a', 'Go to error').click({multiple:true})
    };
    formatEmailIncorrect = () => {
      this.elements
      .getFirstNameField()
      .should("be.visible")
      .type(faker.person.firstName());
      this.elements
        .getLastNameField()
        .should("be.visible")
        .type(faker.person.lastName());
      this.elements
        .getEmailField()
        .should("be.visible")
        .type(faker.internet.displayName());
      this.elements
        .getPhoneNumberField()
        .should("be.visible")
        .type(faker.string.numeric('(000) 000-0000'));
      this.selectRamdonNavBar();
      this.elements.getSubmit().should('be.visible').click()
      this.elements.getMessageError().should('be.visible').contains('a', 'Go to error').click({multiple:true})
    };
  selectRamdonNavBar = () => {
    const randomOptionNavBar =
      Math.random() < 0.5
        ? this.elements.getNavBarOption1()
        : this.elements.getNavBarOption2();
    randomOptionNavBar.click();
    if (randomOptionNavBar === this.elements.getNavBarOption1()) {
      this.fillNavBarOption1Information();
    } else {
      this.fillNavBarOption2Information();
    }
  };
  get optionsSelectLocation() {
    return cy.get('ul').find('li[role=option]')
  }
  randomOptionSelectLocation = () => {
    this.elements.getListLocation().click();
    this.optionsSelectLocation.then((optionsSelectLocation) => {
      const randomOptions = Cypress._.sample(optionsSelectLocation);
      randomOptions.click();
    });
  };
  fillNavBarOption1Information = () => {
    this.randomOptionSelectLocation();
    this.elements
      .getTextArea()
      .should("be.visible")
      .type(faker.lorem.paragraph(3, "<br/>\n"));
    this.elements.getCheckBoxReceiveMail().should("be.visible").click();
  };
  fillNavBarOption2Information = () => {
    this.randomOptionSelectLocation();
    this.checkRandomCheckbox();
    this.elements
      .getTextArea()
      .should("be.visible")
      .type(faker.lorem.paragraph(3, "<br/>\n"));
    this.elements.getCheckBoxReceiveMail().should("be.visible").click({multiple: true});
  };
  get checkBoxInterested () {
      return cy.get('div').find('button[type=button]')
  }
  checkRandomCheckbox = () => {
    this.checkBoxInterested
      .then((parentCheckboxes) => {
        const totalParentCheckboxes = parentCheckboxes.length;
        const randomParentIndex = Cypress._.random(
          0,
          totalParentCheckboxes - 1
        );
        this.checkBoxInterested.eq(randomParentIndex).click();
      });
  };
}
module.exports = new contact();
