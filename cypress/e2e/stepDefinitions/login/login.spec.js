import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../../support/pages/loginPage";
import 'cypress-wait-until';



describe('Validar Login', () => {
    Given("I'm on the login page", () => {
      loginPage.accessLoginPage();
      cy.get(".loginImage___3R-uX").should("be.visible");
    });
  
    When("I insert a registered my email and password", () => {
      const email = Cypress.env('EMAIL');
      const password = Cypress.env('PASSWORD');
      cy.get('#login_form_email').type(email);
      cy.get('#login_form_password').type(password);
    });
  
    And("Click on button Entrar", () => {
      cy.get('.ant-btn').click();
    });
  
    
    Then("Login successfully", () => {
      cy.get('.ant-avatar').should('be.visible');
    });
    
  });

  describe('Validar Campos Login', () => {
    Given("I'm on the login page", () => {
      loginPage.accessLoginPage();
      cy.get(".loginImage___3R-uX").should("be.visible");
    });
  
    When("I enter the wrong email or password", () => {
      const password = Cypress.env('PASSWORD');
      cy.get('#login_form_email').type("EMAIL@aleatorio.com");
      cy.get('#login_form_password').type(password);
    });
  
    And("Click on button Entrar", () => {
      cy.get('.ant-btn').click();
    });
  
    
    Then("Error alert is displayed", () => {
      cy.get('.ant-alert').should('be.visible');
    });

    When("I type a invalid email", () => {
      const password = Cypress.env('PASSWORD');
      cy.get('#login_form_email').clear();
      cy.get('#login_form_email').type("EmailInvalido");
      cy.get('#login_form_password').type(password);
    });

    And("Click on button Entrar", () => {
      cy.get('.ant-btn').click();
    });

    Then("An invalid email message is displayed", () => {
      cy.get('.ant-form-explain').should('be.visible');
    });

    When("I don't type password", () => {
      const email = Cypress.env('EMAIL');
      cy.get('#login_form_email').clear();
      cy.get('#login_form_password').clear();
      cy.get('#login_form_email').type(email);
    });

    And("Click on button Entrar", () => {
      cy.get('.ant-btn').click();
    });

    Then("An invalid password message is displayed", () => {
      cy.get(".ant-form-explain").should('be.visible')
    })
    
  });
  
  