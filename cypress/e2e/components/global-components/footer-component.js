class footer {
  elements = {
    getFooter: () => cy.get('[id="page-footer"]'),
    getCoworkingFooter: () => cy.get("div.items-start a").eq(0),
  };
  clickAndValidateCoworkingFooter = () => {
    this.elements.getCoworkingFooter().should("be.visible").click();
  };
  openAndValidateNewWindowCoworking() {
      cy.get("div.items-start a").eq(0).click();
      
      // Utiliza cy.window() para acceder a la nueva ventana
      cy.window().its('location.href').then((newWindowUrl) => {
        cy.log(`La nueva ventana se abrió en la URL: ${newWindowUrl}`);
      });
  
      // Agrega validaciones para los elementos en la nueva ventana
      cy.get('h3', { timeout: 15000 }).should('exist');
    }
//  openAndValidateNewWindowCoworking() {
//       cy.get("div.items-start a").eq(0).click();
//       cy.window().then((newWindow) => {
//             cy.url({log: false}).then((newWindowUrl) => {
//                   cy.log(`La nueva ventana se abrió en la URL: ${newWindowUrl}`)
//             })
//         cy.wrap(newWindow.location.href).as('newWindowUrl');
//         cy.wait(15000);
            
//         // Agrega validaciones para los elementos en la nueva ventana
//        cy.get('id["properties-list"]').find('div.region').should('exist')
//       });
//     }
}
module.exports = new footer();
