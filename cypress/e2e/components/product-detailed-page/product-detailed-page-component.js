export class productDetailedPage {
    elements = {
          getProductDescriptionTitle : () => cy.get('[id="or-product-description-block-title"]'),
          getProductDescriptionCapacity : () => cy.get('p.font-bold').eq(0),
          getProductDescriptionText : () => cy.get('div[id="or-product-description-block-body"] p'),
          getProductDescriptionItems: () => cy.get('div#or-product-description-block-features'),
          getProductRightPanelPrice: () => cy.get('div[class*="border-neutrals-"]').eq(0),
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
  }