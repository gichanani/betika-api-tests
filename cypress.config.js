const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config)
      return config;
    },
    video: false,
    baseUrl: 'https://fakerestapi.azurewebsites.net/api/v1',
    specPattern: 'cypress/e2e/*.cy.js'
  },
});
