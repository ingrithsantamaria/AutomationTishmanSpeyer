import {
  fillContactInformationAndProceedToPayment,
  fillCheckoutIframesInformation,
} from "../components/checkout/checkout-component";
// const pageCheckout = new checkout()
describe("RENAME ME!", () => {
  beforeEach(() => {
    //DO NOT REMOVE.
    cy.intercept("https://r.stripe.com/0", (req) => {
      req.headers["origin"] = "https://js.stripe.com";
    });
    //DO NOT REMOVE.
    cy.intercept("https://js.stripe.com/v3", (req) => {
      req.on("response", (res) => {
        res.body = res.body.replaceAll("window.top", "window.self");
      });
    });
  });

  it("Fill out contact Information And credit card information", () => {
    fillContactInformationAndProceedToPayment();
  });
  it("Fill out address And proceed to payment", () => {
    fillCheckoutIframesInformation();
  });
});
