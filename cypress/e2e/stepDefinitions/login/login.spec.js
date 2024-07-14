import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../../support/pages/loginPage";
import "cypress-wait-until";

const email = Cypress.env("EMAIL");

describe("Validar Login", () => {
  Given("I'm on the login page", () => {
    loginPage.accessLoginPage();
    loginPage.loginImage().should("be.visible");
    cy.url().should("include", "/login");
  });

  When("I insert a registered my email and password", () => {
    const email = Cypress.env("EMAIL");
    const password = Cypress.env("PASSWORD");
    loginPage.emailInput().type(email);
    loginPage.passwordInput().type(password);
  });

  And("Click on button Entrar", () => {
    loginPage.btnEnter().click();
  });

  Then("Login successfully", () => {
    loginPage.userAvatar().should("be.visible");
  });
});

describe("Validar Campos Login", () => {
  Given("I'm on the login page", () => {
    loginPage.accessLoginPage();
    loginPage.loginImage().should("be.visible");
  });

  When("I enter the wrong email or password", () => {
    const password = Cypress.env("PASSWORD");
    loginPage.emailInput().type("EMAIL@aleatorio.com");
    loginPage.passwordInput().type(password);
  });

  And("Click on button Entrar", () => {
    loginPage.btnEnter().click();
  });

  Then("Error alert is displayed", () => {
    loginPage.loginWrongMessage().should("be.visible");
  });

  When("I type a invalid email", () => {
    const password = Cypress.env("PASSWORD");
    loginPage.emailInput().clear();
    loginPage.emailInput().type("EmailInvalido");
    loginPage.passwordInput().type(password);
  });

  And("Click on button Entrar", () => {
    loginPage.btnEnter().click();
  });

  Then("An invalid email message is displayed", () => {
    loginPage.invalidMessage().should("be.visible");
  });

  When("I don't type password", () => {
    loginPage.emailInput().clear();
    loginPage.passwordInput().clear();
    loginPage.emailInput().type(email);
  });

  And("Click on button Entrar", () => {
    loginPage.btnEnter().click();
  });

  Then("An invalid password message is displayed", () => {
    loginPage.invalidMessage().should("be.visible");
  });
});
