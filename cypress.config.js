const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    pageLoadTimeout: 1200000,
    baseUrl: "https://develop--studio-web-ee7fb9.netlify.app/new/",
    specPattern: "./cypress/e2e/pages/*.cy.js",
    setupNodeEvents(on, config) {
    },
  },
});
