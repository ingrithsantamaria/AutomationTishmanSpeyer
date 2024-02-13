class footer {
  elements = {
    getFooter: () => cy.get('[id="page-footer"]'),
    getCoworkingFooter: () => cy.get("div.items-start a").eq(0),
    getMeetingEventsFooter: () =>
      cy
        .get(
          'a[href="https://yourstudio.staging.tishmanspeyer.com/studio-gather/"]'
        )
        .eq(1),
    getVirtualOfficeFooter: () =>
      cy
        .get(
          'a[href="https://yourstudio.staging.tishmanspeyer.com/virtual-office-signup/"]'
        )
        .eq(1),
    getOurCompanyFooter: () =>
      cy
        .get('a[href="https://yourstudio.staging.tishmanspeyer.com/about-us/"]')
        .eq(1),
    getProductSummaryFooter: () =>
      cy.get(
        'a[href="https://yourstudio.staging.tishmanspeyer.com/products/"]'
      ),
    getLocationsFooter: () => cy.contains("a", "Locations"),
    getCleaningServicesFooter: () =>
      cy.get(
        'a[href="https://yourstudio.staging.tishmanspeyer.com/documents/sp-basic-cleaning/"]'
      ),
    getStudioVisitorCheckInFooter: () =>
      cy.get(
        'a[href="https://yourstudio.staging.tishmanspeyer.com/documents/vc/"]'
      ),
    getContactUsFooter: () => cy.get('a[href="/new/contact"]'),
    getLinkEmailGeneralInquires: () => cy.get('a[href="mailto:info@yourstudio.com"]'),
    getPhoneFooter: () => cy.get('a[href*="tel:"]'),
    getEmailBrokersFooter: () => cy.get('a[href="mailto:brokers@yourstudio.com"]'),
    getInstagramFooter: () =>
      cy.get(
        'a[href="https://www.instagram.com/studiobytishmanspeyer/"]'
      ),
  };
  openAndValidateNewWindowCoworking = () => {
    this.elements.getCoworkingFooter().click();
    this.openNewWindow();
  };
  openAndValidateNewWindowMeetingEvents = () => {
    this.elements.getMeetingEventsFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowVirtualOffice = () => {
    this.elements.getMeetingEventsFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowOurCompany = () => {
    this.elements.getOurCompanyFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowProductSummary = () => {
    this.elements.getProductSummaryFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowLocations = () => {
    this.elements.getLocationsFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowStudioVisitor = () => {
    this.elements.getStudioVisitorCheckInFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowCleanServices = () => {
    this.elements.getCleaningServicesFooter().should("be.visible").click();
    this.openNewWindow();
  };
  openAndValidateNewWindowContactUs = () => {
    this.elements.getContactUsFooter().should("be.visible").click();
    this.openNewWindow();
  };
  validateEmailGeneralInquiresAppOpened = () => {
    this.elements.getLinkEmailGeneralInquires().click();
    cy.url().should('include', 'mailto:');
  };
  validateEmailBrokersAppOpened = () => {
    this.elements.getEmailBrokersFooter().click();
    cy.url().should('include', 'mailto:');
  };
  openNewWindow = () => {
    cy.window()
      .its("location.href")
      .then((newWindowUrl) => {
        cy.log(`La nueva ventana se abrió en la URL: ${newWindowUrl}`);
      });
    cy.get("h3", { timeout: 15000 }).should("exist");
  };
  clickPhoneNumberLink = () => {
    this.elements.getPhoneFooter().click();
    this.validateAndAcceptPopup()
  }
  validateAndAcceptPopup = () => {
    cy.on('window:confirm', (text) => {
      expect(text).to.include('Abrir FaceTime');
      return true;
    });
    cy.window().should('have.property', 'closed', true);
  }
  openAndValidateNewWindowIntagram = () => {
    this.elements.getInstagramFooter().should('be.visible').click()
    cy.window()
      .its("location.href")
      .then((newWindowUrl) => {
        cy.log(`La nueva ventana se abrió en la URL: ${newWindowUrl}`);
      });
  }
  //   openNewWindow() {
  //     cy.window().then((win) => {
  //       const originalUrl = win.location.href;
  //       this.elements.getCoworkingFooter().click();
  //       cy.window().should("not.eq", win);
  //       cy.window().then((newWindow) => {
  //         cy.get("h3", { timeout: 15000 }).should("exist");
  //         const newWindowUrl = newWindow.location.href;
  //         cy.log(`La nueva ventana se abrió en la URL: ${newWindowUrl}`);
  //         newWindow.location.href = originalUrl;
  //       });
  //     });
  //   }
}
module.exports = new footer();
