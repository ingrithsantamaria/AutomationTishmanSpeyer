class footer {
  elements = {
    getFooter: () => cy.get('[id="page-footer"]'),
    getCoworkingFooter: () => cy.get("div.items-start a").eq(0),
    getMeetingEventsFooter: () => cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/studio-gather/"]').eq(1),
    getVirtualOfficeFooter: () => cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/virtual-office-signup/"]').eq(1),
    getOurCompanyFooter: () => cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/about-us/"]').eq(1),
    getProductSummaryFooter: () => cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/products/"]')
  };
  openAndValidateNewWindowCoworking = () => {
      this.elements.getCoworkingFooter().click();
      this.openNewWindow()
    }
    openAndValidateNewWindowMeetingEvents = () => {
      this.elements.getMeetingEventsFooter().should("be.visible").click()
      this.openNewWindow()
    }
    openAndValidateNewWindowVirtualOffice = () => {
      this.elements.getMeetingEventsFooter().should("be.visible").click()
      this.openNewWindow()
    }
    openAndValidateNewWindowOurCompany = () => {
      this.elements.getOurCompanyFooter().should("be.visible").click()
      this.openNewWindow()
    }
    openAndValidateNewWindowProductSummary = () => {
      this.elements.getProductSummaryFooter().should("be.visible").click()
      this.openNewWindow()
    }
    openNewWindow = () => {
      cy.window().its('location.href').then((newWindowUrl) => {
            cy.log(`La nueva ventana se abrió en la URL: ${newWindowUrl}`);
          });
          cy.get('h3', { timeout: 15000 }).should('exist');
  }
}
module.exports = new footer();
