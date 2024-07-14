Feature: ResetPassword

Scenario: Validar opcao esqueci minha senha
Given I'm on the login page
When I click on forgot my password
Then I'm redirected to page I forgot my password

Scenario: Validar tela recuperar senha
Given I'm on the recover password page
When I'm insert a invalid email
Then An invalid email message is displayed
When I'm insert a valid email
And I click on button advance
Then An alert message is displayed