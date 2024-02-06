class footer {

    elements = {

          getFooter : () => cy.get('[id="page-footer"]'),
    }
  }

  module.exports = new footer();