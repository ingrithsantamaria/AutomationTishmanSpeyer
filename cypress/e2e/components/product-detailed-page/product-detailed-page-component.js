import { faker } from "@faker-js/faker";
export class productDetailedPage {
    elements = {
          getProductDescriptionTitle : () => cy.get('[id="or-product-description-block-title"]'),
          getProductDescriptionCapacity : () => cy.get('p.font-bold').eq(0),
          getProductDescriptionText : () => cy.get('div[id="or-product-description-block-body"] p'),
          getProductDescriptionItems: () => cy.get('div#or-product-description-block-features'),
          getProductRightPanelPrice: () => cy.get('div[class*="border-neutrals-"]').eq(0),
          getProductRightPanelCalendar: () => cy.get('button[name="date"]'),
          getProductRightPanelDuration: () => cy.get('button[aria-haspopup="listbox"]'),
          getNavBarOption1: () => cy.contains('span', 'Upcoming'),
          getNavBarOption2: () => cy.contains('span', 'Morning'),
          getNavBarOption3: () => cy.contains('span', 'Afternoon'),
          getCheckBoxAdditionalService: () => cy.get('button[role="switch"]'),
          getTextAreaCheckAdditionalService: () => cy.get('textarea#additionalServices-field'),
          getInquireButton: () => cy.contains('button', 'Inquire'),
          getInstantBookButton: () => cy.get('button[type="submit"]')
    }
    validateFormTitle = () => {
      this.elements.getProductDescriptionTitle().should('be.visible')
    }
    validateFormCapacity = () => {
      this.elements.getProductDescriptionCapacity().should('contain', 'Capacity: 10').and('be.visible')
    }
    validateFormDescription = () => {
      const text = 'Ideal for large meetings and team sessions,'
      this.elements.getProductDescriptionText().should('include.text', text).and('be.visible')
    }
    validateFormItems = () => {
      const textItem1 = 'Skyline Views'
      const textItem2 = 'Video-Conferencing'
      const textItem3 = 'High-End Design'
      this.elements.getProductDescriptionItems().should('be.visible')
      this.elements.getProductDescriptionItems().find('p').should('include.text', textItem1)
      this.elements.getProductDescriptionItems().find('p').should('include.text', textItem2)
      this.elements.getProductDescriptionItems().find('p').should('include.text', textItem3)
    }
    validateRightPanelPrice = () => {
      this.elements.getProductRightPanelPrice().should('be.visible')
      const rightPanelPrice = [
        '$150.00/hour',
        '20% off for 4+ hours',
        '25% off for 8+ hours'
      ];
      rightPanelPrice.forEach((value) => {
        cy.get('p').should('contain', value)
      })
    }
    validateAndClickRightPanelCalendar = () => {
      this.elements.getProductRightPanelCalendar().should('be.visible')
      //cy.get('td[role="presentation"]').eq(2).should('be.visible')
    }
    get optionsSelectDuration() {
      return cy.get('ul').find('li[role=option]')
    }
    randomOptionSelectDuration = () => {
      this.elements.getProductRightPanelDuration().click();
      this.optionsSelectDuration.then((optionsSelectDuration) => {
        const randomOptions = Cypress._.sample(optionsSelectDuration);
        randomOptions.click();
      });
    };
    selectRandomNavbar = () => {
      cy.get('button[role=tab]').then((navbarElements) => {
        const navbarIndex = Cypress._.random(0, Math.min(2, navbarElements.length - 1));
        const navbar = navbarElements.eq(navbarIndex);
        cy.wrap(navbar).click(); 
      });
    }
    selectRandomTime() {
      cy.get('div.outline-none').then((botonElements) => {
        const botonIndex = Cypress._.random(0, botonElements.length - 1);
        //const boton = botonElements.eq(botonIndex);
        cy.get(botonElements[botonIndex]).click({force:true});
      });
    }
    validateAndClickAdditionalService = () => {
      this.elements.getCheckBoxAdditionalService().should('be.visible').click()
      cy.get('div.text-neutrals-800').should('not.be.empty')
      this.elements.getTextAreaCheckAdditionalService().should('be.visible').type(faker.lorem.paragraph(3, "<br/>\n"));
    }
    validateAndClickInquireButton = () => {
      this.elements.getInquireButton().should('be.visible').click({force:true, multiple:true})
      this.openNewWindow()
      // cy.url().then((url) => {
      //   expect(url).to.include('contact?')
      //   expect(url).to.include('building=the-spiral')
      //   expect(url).to.include('submissionType=Pricing')
      //   expect(url).to.include('type=meeting_room')
      // })
    }
    openNewWindow = () => {
      cy.window()
        .its("location.href")
        .then((newWindowUrl) => {
          cy.log(`La nueva ventana se abrió en la URL: ${newWindowUrl}`);
        });
    };
    validateAndClickInstantButton = () => {
      this.elements.getInstantBookButton().should('be.visible').click()
      this.openNewWindow()
    }
  }