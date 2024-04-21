export class HomePage {
    singUpButton(){
        return cy.xpath(`//button[contains(@class, "hero-descriptor_btn") and contains(@class, "btn") and contains(@class, "btn-primary")]`)
    }
    singUpName(){
        return cy.xpath(`//input[@id="signupName"]`)
    }
    singUpLastName(){
        return cy.xpath(`//input[@id="signupLastName"]`)
    }
    singUpemail(){
        return cy.xpath(`//input[@id="signupEmail"]`)
    }
    singUpPassword(){
        return cy.xpath(`//input[@id="signupPassword"]`)
    }
    singUpRepeatPassword(){
        return cy.xpath(`//input[@id="signupRepeatPassword"]`)
    }
    singUpRegisterButton(){
        return cy.xpath(`//div[@class='modal-footer']//button[@class='btn btn-primary']`);
    }
    singInButton(){
        return cy.xpath(`//button[@class="btn btn-outline-white header_signin"]`)
    }
    singInEmail(){
        return cy.xpath(`//input[@id="signinEmail"]`)
    }
    singInPassword(){
    return cy.xpath(`//input[@id="signinPassword"]`)
    }
    singInLoginButton(){
        return cy.xpath(`//button[@class='btn btn-primary']`)
    }
}
