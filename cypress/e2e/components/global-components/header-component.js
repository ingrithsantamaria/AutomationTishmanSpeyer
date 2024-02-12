class header {
  static textOfficeSuites = 'body'
    elements = {
          //getIcon : () => cy.get('[alt="Studio by Tishman Speyer"]'),
          getIcon : () => cy.get('header[id="page-header"] img'),
          getCoworkingButton : () => cy.get('a[href="https://yourstudio.com/locations/"]').eq(0),
          getOfficeSuites : () => cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/studio-private/"]').eq(0)
    }
    clickAndValidateIconHome = () => {
      this.elements.getIcon().should("be.visible").click({multiple: true})
      cy.title().should('include', 'Book a Space')
    }
    clickAndValidateCoworkingButton = () => {
      this.elements.getCoworkingButton().should("be.visible").click()
      const commonText = 'Office Space in'
      cy.get('div.region').find('h3.filter').should('have.length.above', 0)
      cy.get('div.region').find('h3.filter').each(($h3) => {
        cy.wrap($h3).invoke('text').should('match', new RegExp(`^${commonText} .*`))
      })
    }
    clickAndValidateOfficeSuites = () => {
      const text = "Amenities & Features "
      this.elements.getOfficeSuites().should('be.visible').click()
      cy.url().should('include', 'studio-private')
      cy.get(this.textOfficeSuites.should('include.text', text))
    }
  }
  module.exports = new header();