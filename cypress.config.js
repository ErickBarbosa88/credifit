const cucumber =require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("Cypress")
require('dotenv').config();

module.exports = defineConfig({
  env: {
    PASSWORD: "abcd1234",
    EMAIL: "testes+desafioqa@credifit.com.br",
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportPageTitle: 'Report Testes',
    charts: false,
    embeddedScreenshots: true,
    reportDir: "cypress/reports",
    overwrite: true,
  },
  e2e: {
    pageLoadTimeout: 10000,
    baseUrl:"https://admin-develop.credifit.com.br",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.env = process.env;
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/stepDefinitions/*.feature"
  },
});
