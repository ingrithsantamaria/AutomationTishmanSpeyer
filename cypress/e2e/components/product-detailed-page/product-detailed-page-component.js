class productDetailedPage {

    elements = {

          getProductDescriptionTitle : () => cy.get('[id="or-product-description-block-title"]'),
    }
  }

  module.exports = new productDetailedPage();