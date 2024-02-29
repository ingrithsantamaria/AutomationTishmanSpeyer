class productListingPage {
  elements = {
    getHeader: () => cy.get("#page-header"),
    getBookSpaceTitle: () => cy.contains("h1", "Book a Space"),
    getDeskButton: () => cy.get('div[class*="border-neutrals-"]').eq(0),
    getMeetingRoomButton: () => cy.get('div[class*="border-neutrals-"]').eq(1),
    getEventSpaceButton: () => cy.get('div[class*="border-neutrals-"]').eq(1),
    getOfficeButton: () => cy.get('svg[fill="none"]').eq(3),
    getSuiteButton: () => cy.get('div[class*="border-neutrals-"]').eq(4),
    getSwitchInstatBook: () =>
      cy.get('div[id="or-filter-section-instant-book-switch-desktop"] label'),
    getComboCityButton: () => cy.get('button[type="button"] div').eq(0),
    getBuildingButton: () =>
      cy.get('div[id="or-filter-section-buildings-dropdown"] div').eq(0),
  };
  clickAndValidateDeskButton = () => {
    this.elements.getDeskButton().should("be.visible").click({ force: true });
  };
  clickAndValidateMeetingRoomButton = () => {
    this.elements
      .getMeetingRoomButton()
      .should("be.visible")
      .click({ force: true });
  };
  clickAndValidateEventSpaceButton = () => {
    this.elements
      .getEventSpaceButton()
      .should("be.visible")
      .click({ force: true });
  };
  clickAndValidateOfficeButton = () => {
    this.elements.getOfficeButton().should("be.visible").click({ force: true });
  };
  clickAndValidateSuiteButton = () => {
    this.elements.getSuiteButton().should("be.visible").click({ force: true });
  };
  selectSpaceByIndex(index) {
    cy.get('button.group div').eq(index).click()
  }
  get quantityResultsByPage() {
    return cy.get('p.inline').invoke('text')
  }
  validateSpacesReturnResults = () => {
     this.elements.getDeskButton().click();
    this.quantityResultsByPage
      .invoke("text")
      .as("resultsBefore")
      .then(() => {
        this.elements.getDeskButton().click();
        cy.wait(15000);
        this.quantityResultsByPage.invoke("text").as("resultsAfter");
      });
  };
  compareNumberResults = () => {
    cy.get("@resultsBefore").then((resultsBefore) => {
      cy.get("@resultsAfter").then((resultsAfter) => {
        expect(resultsBefore).not.to.eq(resultsAfter);
      });
    });
  };
  get elementsWithTag() {
    return cy.get("div[data-product=true]").contains("div", "Instant book");
  }
  verifyChangesElements = () => {
    const tag = "Instant book";
    return this.elementsWithTag
      .invoke("text")
      .as("elementsBefore")
      .then(() => {
        this.elements.getSwitchInstatBook().click();
        this.elementsWithTag.invoke("text").as("elementsAfter");
        this.elementsWithTag
          .filter(`:contains('${tag}')`)
          .as("filteredElements");
      });
  };
  compareElements = () => {
    cy.get("@elementsBefore").then((elementsBefore) => {
      cy.get("@filteredElements")
        .invoke("text")
        .then((textFiltered) => {
          expect(elementsBefore.trim()).not.to.eq("");
          expect(textFiltered).to.include(elementsBefore.trim());
        });
    });
  };
  ListCities = () => {
    return [
      "New York",
      "Los Angeles",
      "Washington DC",
      "Boston",
      "Chicago",
      "San Francisco",
      "Brasilia",
    ];
  };
  optionsBuildingsByCity = () => {
    const buildingsMap = new Map();
    buildingsMap.set("New York", [
      "View All",
      "The Spiral",
      "The JACX",
      "1230 Sixth Avenue",
      "1270 Sixth Avenue",
      "600 Fifth Avenue",
      "45 Rockefeller Plaza",
      "Studio Grand Central",
      "300 Park Avenue",
      "11 West 42nd Street",
      "CitySpire",
      "175 Varick Street",
    ]);
    buildingsMap.set("Los Angeles", ["Studio Beverly Hills"]);
    buildingsMap.set("Washington DC", ["900 19th Street"]);
    buildingsMap.set("Boston", ["125 High Street"]);
    buildingsMap.set("Chicago", ["The Franklin"]);
    buildingsMap.set("San Francisco", [
      "View All",
      "595 Market Street",
      "333 Bush Street",
    ]);
    return buildingsMap;
  };
  verifyCitiesCombo = () => {
    this.elements.getComboCityButton().click();
    return cy
      .get("ul")
      .find("li[role=option]")
      .each(($option) => {
        const city = $option.text().trim();
        expect(this.ListCities()).to.include(city);
      });
  };
  verifyBuildingsByCity = () => {
    this.ListCities().forEach((city) => {
      this.selectCityToCheckOptionsBuildings(city);
    });
  };
  selectCityToCheckOptionsBuildings = (city) => {
    this.elements.getComboCityButton().click();
    cy.get("ul").find("li[role=option]").contains(city).click()
    cy.wait(5000);
    this.verifyOptionsBuildingsCombo(city);
    cy.get("body").click();
  };
  verifyOptionsBuildingsCombo = (city) => {
    const expectedOptions = this.optionsBuildingsByCity().get(city);
    this.elements.getBuildingButton().click();
    cy.get("ul")
      .find("li[role=option]")
      .each(($option) => {
        const opcion = $option.text().trim();
        expect(expectedOptions).to.include(opcion);
      });
  };
}
module.exports = new productListingPage();
