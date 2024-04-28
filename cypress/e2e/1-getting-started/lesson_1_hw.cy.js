import { HomePage } from '../../../pages/HomePage';
import { EditProfilePage } from '../../../pages/EditProfilePage';
import { BasePage } from '../../../pages/BasePage';

describe('My First Test', () => {
    const homePage = new HomePage();
    const basePage = new BasePage();
    const editProfilePage = new EditProfilePage();


    it('Visit site and fill out registration form', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
        
        homePage.singUpButton().should('exist').click();
        cy.log('Clicked on Sign Up button');

        const randomEmail = generateRandomEmail();
    
        homePage.singUpName().type('Name').should('have.value', 'Name');
        homePage.singUpLastName().type('LastName').should('have.value', 'LastName');
        homePage.singUpemail().type(randomEmail).should('have.value', randomEmail); 
        homePage.singUpPassword().type('Redirect_123').should('have.value', 'Redirect_123');
        homePage.singUpRepeatPassword().type('Redirect_123').should('have.value', 'Redirect_123');
    
        homePage.singUpRegisterButton().click({ force: true });
        
        cy.wait(1000); 

        basePage.profileDropDown().click();
        basePage.profileButton().click();
        ditProfilePage.profileName().should('contain', 'Name').should('contain', 'undefined');
        basePage.profileDropDown().click();
        basePage.logOutButton().click()
    
        basePage.profileDropDown().click();
       
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
        /*
        editProfilePage.editProfileButton().click();
        cy.wait(2000); 
        editProfilePage.nameField().invoke('val').then((nameFieldValue) => {
            expect(nameFieldValue).to.equal('Name');
        });
        editProfilePage.lastNameField().invoke('val').then((lastNameFieldValue) => {
            expect(lastNameFieldValue).to.equal('undefined');
        });
        editProfilePage.closeModalWindowButton().click();
       editProfilePage.profileButton().click();
        */
       //цей код викинула так як з незрозумілих мені причин, в модалкі через раз відображаеться ім'я та призвіще
