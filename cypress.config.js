const cucumber =require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress")
require('dotenv').config();;

module.exports = defineConfig({
  env: {
    PASSWORD: "abcd1234",
    EMAIL: "testes+desafioqa@credifit.com.br",
  },
  e2e: {
    pageLoadTimeout: 10000,
    baseUrl:"https://admin-develop.credifit.com.br",
    setupNodeEvents(on, config) {
      config.env = process.env;
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/stepDefinitions/*.feature"
  },
});
