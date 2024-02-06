const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "RENAME ME!",
    specPattern: "./cypress/e2e/pages/*.cy.js",
    setupNodeEvents(on, config) {
    },
  },
});
