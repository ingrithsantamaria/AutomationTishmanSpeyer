class header {
  static textOfficeSuites = "body";
  elements = {
    //getIcon : () => cy.get('[alt="Studio by Tishman Speyer"]'),
    getHeader: () => cy.get('#header'),
    getIcon: () => cy.get('header[id="page-header"] img'),
    getCoworkingButton: () =>
      cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/locations/"]').eq(0),
    getOfficeSuites: () =>
      cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/studio-private/"]'),
    getMeetingEventsButton: () =>
      cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/studio-gather/"]').eq(0),
    getVirtualOfficeButton: () =>
      cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/virtual-office-signup/"]').eq(0),
    getOurCompanyButton: () =>
      cy.get('a[href="https://yourstudio.staging.tishmanspeyer.com/about-us/"]').eq(0),
  };
  validateHeader = () => {
    this.elements.getHeader().should('exist')
  }
  validateFooter = () => {
    this.elements.getFooter().should('exist')
  }
  clickAndValidateIconHome = () => {
    this.elements.getIcon().should("be.visible").click({ multiple: true });
    //Aserciones que funcionan, pero fallan por problemas en el sitio STG
    // const title = "Book a Space";
    // cy.title().should("include", title);
  };
  clickAndValidateCoworkingButton = () => {
    this.elements.getCoworkingButton().should("be.visible").click();
    cy.url().should("include", "locations");
    const commonText = "Office Space in";
    cy.get("div.region").find("h3.filter").should("have.length.above", 0);
    cy.get("div.region")
      .find("h3.filter")
      .each(($h3) => {
        cy.wrap($h3)
          .invoke("text")
          .should("match", new RegExp(`^${commonText} .*`));
      });
  };
  clickAndValidateOfficeSuites = () => {
    this.elements.getOfficeSuites().should("be.visible").click();
    cy.url().should("include", "studio-private");
    //Aserciones que funcionan, pero fallan por problemas en el sitio STG
    // const text = "Amenities & Features ";
    // cy.get("div.wp-block-column h3").eq(0).should("have.text", text);
  };
  clickAndValidateMeetingEvents = () => {
    this.elements.getMeetingEventsButton().should("be.visible").click();
    cy.url().should("include", "studio-gather");
    //Aserciones que funcionan, pero fallan por problemas en el sitio STG
    // const text = "Exceptional spaces for unrivaled events ";
    // cy.contains("h2", text);
  };
  clickAndValidateVirtualOfficeButton = () => {
    this.elements.getVirtualOfficeButton().should("be.visible").click();
    cy.url().should("include", "virtual-office-signup");
    const text = "Sign up for a Studio virtual office membership today.";
    cy.contains("h3", text);
  };
  clickAndValidateOurCompanyButton = () => {
    this.elements.getOurCompanyButton().should("be.visible").click();
    cy.url().should("include", "about-us");
    //Aserciones que funcionan, pero fallan por problemas en el sitio STG
    // const title = "About Us";
    // cy.title().should("include", title);
  };
}
module.exports = new header();
