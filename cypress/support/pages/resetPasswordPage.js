export default {

    forgotPasswordbtn(){
        return cy.get(".ant-form-item-children > a")
    },
    confirmEmailInput(){
        return cy.get("#email_confirm_form_email")
    },
    emailSendSuccessMessage(){
        return cy.get(".ant-alert-message")
    },
    sendRecoveryEmailBtn(){
        return cy.get(".ant-btn")
    }


}