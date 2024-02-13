import {
  openAndValidateNewWindowCoworking,
  openAndValidateNewWindowMeetingEvents,
  openAndValidateNewWindowVirtualOffice,
  openAndValidateNewWindowProductSummary
} from "../components/global-components/footer-component";
describe("RENAME ME!", () => {
  beforeEach(() => {
    //VISIT GOES HERE.
    cy.visit("/spaces?region=new-york");
    cy.wait(15000);
    cy.acceptCookiesIfExists();
  });
  it("User clicks on link coworking footer", () => {
    openAndValidateNewWindowCoworking();
  });
  it("User clicks on link Meeting Events footer", () => {
    openAndValidateNewWindowMeetingEvents();
  });
  it("User clicks on link Virtual Office Footer", () => {
    openAndValidateNewWindowVirtualOffice();
  });
  it("User clicks on link Product summary Footer", () => {
    openAndValidateNewWindowProductSummary();
  });
});
