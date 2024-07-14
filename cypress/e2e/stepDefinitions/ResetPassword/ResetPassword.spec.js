import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../../support/pages/loginPage";
import resetPasswordPage from "../../../support/pages/resetPasswordPage";
import "cypress-wait-until";

const email = Cypress.env("EMAIL");

describe("Validar opcao esqueci minha senha", () => {
  Given("I'm on the login page", () => {
    loginPage.accessLoginPage();
    loginPage.loginImage().should("be.visible");
    cy.url().should("include", "/login");
  });

  When("I click on forgot my password", () => {
    resetPasswordPage.forgotPasswordbtn().click();
  });

  Then("I'm redirected to page I forgot my password", () => {
    cy.url().should("include", "/esqueci-minha-senha");
  });
});

describe("Validar tela recuperar senha", () => {
  Given("I'm on the recover password page", () => {
    cy.visit("/esqueci-minha-senha");
    cy.url().should("include", "/esqueci-minha-senha");
  });

  When("I'm insert a invalid email", () => {
   resetPasswordPage.confirmEmailInput().type("EmailInvalido");
  });

  Then("An invalid email message is displayed", () => {
    loginPage.invalidMessage().should("be.visible");
  });

  When("I'm insert a valid email", () => {
   resetPasswordPage.confirmEmailInput().clear();
   resetPasswordPage.confirmEmailInput().type(email);
  });

  And("I click on button advance", () => {
    resetPasswordPage.sendRecoveryEmailBtn().should("be.visible");
    resetPasswordPage.sendRecoveryEmailBtn().click();
  });

  Then("An alert message is displayed", () => {
    resetPasswordPage.emailSendSuccessMessage().should("be.visible");
    resetPasswordPage.emailSendSuccessMessage().should(
      "have.text",
      "Um link para recuperação da senha foi enviado para seu e-mail."
    );
  });
});
