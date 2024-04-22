import { HomePage } from '../../../pages/HomePage';
import { EditProfilePage } from '../../../pages/EditProfilePage';
import { BasePage } from '../../../pages/BasePage';

const homePage = new HomePage();
const editProfilePage = new EditProfilePage();
const basePage = new BasePage();
let randomEmail;

describe('My First Test', () => {
    it('Visit site and fill out registration form', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
        
        homePage.singUpButton().should('exist').click();
        
        randomEmail = generateRandomEmail();
    
        homePage.singUpName().type('Name').should('have.value', 'Name');
        homePage.singUpLastName().type('LastName').should('have.value', 'LastName');
        homePage.singUpemail().type(randomEmail).should('have.value', randomEmail); 
        homePage.singUpPassword().type('Redirect_123').should('have.value', 'Redirect_123');
        homePage.singUpRepeatPassword().type('Redirect_123').should('have.value', 'Redirect_123');
    
        homePage.singUpRegisterButton().click({ force: true });
        
        cy.wait(1000); 

        basePage.profileDropDown().click();
        basePage.profileButton4().click();
        editProfilePage.profileName().should('contain', 'Name').should('contain', 'LastName');
        basePage.profileDropDown().click();
        basePage.logOutButton().click();
        
        homePage.singInButton().click(); 
        homePage.singInEmail().type(randomEmail); 
        homePage.singInPassword().type('Redirect_123'); 
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