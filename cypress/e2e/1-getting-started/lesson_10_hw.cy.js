import { HomePage } from '../../../pages/HomePage';
import { EditProfilePage } from '../../../pages/EditProfilePage';
import { BasePage } from '../../../pages/BasePage';

const homePage = new HomePage();
const editProfilePage = new EditProfilePage();
const basePage = new BasePage();
let randomEmail;
const signUpName = 'Name';
const signUpLastName = 'LastName';
const signUpPassword = 'Redirect_123';

describe('My First Test', () => {
    it('Visit site and fill out registration form', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
        
        homePage.singUpButton().should('exist').click();
        
        randomEmail = generateRandomEmail();
    
        homePage.singUpName().type(signUpName).should('have.value', signUpName);
        homePage.singUpLastName().type(signUpLastName).should('have.value', signUpLastName);
        homePage.singUpemail().type(randomEmail).should('have.value', randomEmail); 
        homePage.singUpPassword().type(signUpPassword).should('have.value', signUpPassword);
        homePage.singUpRepeatPassword().type(signUpPassword).should('have.value', signUpPassword);
    
        homePage.singUpRegisterButton().click({ force: true });
        
        // Wait for profile drop-down to be visible
        basePage.profileDropDown().should('be.visible');
        
        basePage.profileDropDown().click();
        basePage.profileButton4().click();
        editProfilePage.profileName().should('contain', signUpName).should('contain', signUpLastName);
        basePage.profileDropDown().click();
        basePage.logOutButton().click();
        
        homePage.singInButton().click(); 
        homePage.singInEmail().type(randomEmail); 
        homePage.singInPassword().type(signUpPassword); 
        homePage.singInLoginButton().click();
    
        basePage.profileDropDown().should('exist');
    });
});

function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        email += characters.charAt(randomIndex);
    }
    email += '@example.com';
    return email;
}