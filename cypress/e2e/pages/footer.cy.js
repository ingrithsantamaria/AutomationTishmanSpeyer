import {
  openAndValidateNewWindowCoworking,
  openAndValidateNewWindowMeetingEvents,
  openAndValidateNewWindowVirtualOffice,
  openAndValidateNewWindowProductSummary,
  openAndValidateNewWindowLocations,
  openAndValidateNewWindowCleanServices,
  openAndValidateNewWindowStudioVisitor,
  openAndValidateNewWindowContactUs,
  validateEmailGeneralInquiresAppOpened,
  clickPhoneNumberLink,
  validateEmailBrokersAppOpened,
  openAndValidateNewWindowIntagram,
  openAndValidateNewWindowFacebook,
  openAndValidateNewWindowLinkedin,
  openAndValidateNewWindowRulesAndRegulations,
  openAndValidateNewWindowPrivacyPolicy,
  openAndValidateNewWindowSitemap,
  verifyCopyright
} from "../components/global-components/footer-component";
describe("Click and validate links footer", () => {
  beforeEach(() => {
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
  it("User clicks on link Locations Footer", () => {
    openAndValidateNewWindowLocations();
  });
  it("User clicks on link Clean Services Footer", () => {
    openAndValidateNewWindowCleanServices();
  });
  it("User clicks on link Studio Visitor Check-in Footer", () => {
    openAndValidateNewWindowStudioVisitor();
  });
  it("User clicks on link Contact Us Footer", () => {
    openAndValidateNewWindowContactUs();
  });
  it("User clicks on link Email Genaral inquires Footer", () => {
    validateEmailGeneralInquiresAppOpened();
  });
  it("User clicks on phone number Footer", () => {
    clickPhoneNumberLink();
  });
  it("User clicks on link Email Brokers Footer", () => {
    validateEmailBrokersAppOpened();
  });
  it("User clicks on icon instagram Footer", () => {
    openAndValidateNewWindowIntagram();
  });
  it("User clicks on icon Facebook Footer", () => {
    openAndValidateNewWindowFacebook();
  });
  it("User clicks on icon Linkedin Footer", () => {
    openAndValidateNewWindowLinkedin();
  });
  it("User clicks on link Rules And Regulations footer", () => {
    openAndValidateNewWindowRulesAndRegulations();
  })
  it("User clicks on link Privacy Policy footer", () => {
    openAndValidateNewWindowPrivacyPolicy();
    cy.url().should('include','privacy-policy')
  })
  it("User clicks on link Sitemap footer", () => {
    openAndValidateNewWindowSitemap();
  })
  it("Verify copyRight footer", () => {
    verifyCopyright();
  })
});
