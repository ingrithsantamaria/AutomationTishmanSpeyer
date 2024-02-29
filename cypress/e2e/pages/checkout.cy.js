import {
  fillContactInformationAndProceedToPayment,
  fillCheckoutIframesInformation,
  getGeneratedData,
  validateSavedForm,
  fillContactInformationAndProceedToPaymentWithIncorrectEmailFormat,
  fillContactInformationAndProceedToPaymentWithIncorrectPhoneFormat
} from "../components/checkout/checkout-component";
import { productDetailedPage } from "../components/product-detailed-page/product-detailed-page-component";
const productDetail = new productDetailedPage()
// const pageCheckout = new checkout()
describe("RENAME ME!", () => {
  beforeEach(() => {
    //DO NOT REMOVE.
    cy.visit("/the-spiral/birch");
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
  it("User clicks on Instant Book from the product detail to go to checkout", () => {
    productDetail.selectRandomNavbar()
    productDetail.selectRandomTime()
    productDetail.validateAndClickInstantButton()
  });
  it("User fills out the first part of the form: Contact information", () => {
    productDetail.selectRandomNavbar()
    productDetail.selectRandomTime()
    productDetail.validateAndClickInstantButton()
    const generateData = getGeneratedData()
    fillContactInformationAndProceedToPayment(generateData);
  });
  it("User enters incorrect email format", () => {
    productDetail.selectRandomNavbar()
    productDetail.selectRandomTime()
    productDetail.validateAndClickInstantButton()
    const generateData = getGeneratedData()
    fillContactInformationAndProceedToPaymentWithIncorrectEmailFormat(generateData);
    fillCheckoutIframesInformation()
  });
  it("User enters incorrect number phone format", () => {
    productDetail.selectRandomNavbar()
    productDetail.selectRandomTime()
    productDetail.validateAndClickInstantButton()
    const generateData = getGeneratedData()
    fillContactInformationAndProceedToPaymentWithIncorrectPhoneFormat(generateData);
    fillCheckoutIframesInformation()
  });
  it("User fills out the second part of the form: Payment information", () => {
    productDetail.selectRandomNavbar()
    productDetail.selectRandomTime()
    productDetail.validateAndClickInstantButton()
    const generateData = getGeneratedData()
    fillContactInformationAndProceedToPayment(generateData);
    fillCheckoutIframesInformation()
    cy.wait(5000)
    validateSavedForm()
  });
});
