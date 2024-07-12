Feature: Login

Scenario: Validar Login
Given I'm on the login page
When I insert a registered my email and password
And Click on button Entrar
Then Login successfully

Scenario: Validar Campos Login
Given I'm on the login page
When I enter the wrong email or password
And Click on button Entrar
Then Error alert is displayed
When I type a invalid email
And Click on button Entrar
Then An invalid email message is displayed
When I don't type password
And Click on button Entrar
Then An invalid password message is displayed




