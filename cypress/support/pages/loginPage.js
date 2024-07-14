export default {
  accessLoginPage() {
    return cy.visit("/login");
  },
  btnEnter() {
    return cy.get(".ant-btn");
  },
  emailInput() {
    return cy.get("#login_form_email");
  },
  passwordInput() {
    return cy.get("#login_form_password");
  },
  userAvatar() {
    return cy.get(".ant-avatar");
  },
  loginImage() {
    return cy.get(".loginImage___3R-uX");
  },
  invalidMessage() {
    return cy.get(".ant-form-explain");
  },
  loginWrongMessage() {
    return cy.get(".ant-alert");
  },
};


