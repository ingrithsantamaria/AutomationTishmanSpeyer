class productListingPage {

    elements = {

          getBookSpaceTitle : () => cy.contains('h1', 'Book a Space'),
    }
  }

  module.exports = new productListingPage();