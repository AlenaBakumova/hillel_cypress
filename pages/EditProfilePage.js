import { BasePage } from './BasePage';

export class EditProfilePage extends BasePage {
    profileDropDown(){
        return cy.xpath(`//button[@class="dropdown-toggle user-nav_toggle"]`);
    }
    editProfileButton(){
        return cy.xpath(`//button[@class="btn btn-primary" and contains(text(), "Edit profile")]`);
    }
    profileName(){
       return cy.xpath(`//p[@class="profile_name display-4"]`);
    }
    nameField(){
        return cy.xpath(`//input[@id="editProfileName"]`);
    }
    lastNameField(){
        return cy.xpath(`//input[@id="editProfileLastName"]`);
    }
    closeModalWindowButton(){
        return cy.xpath(`//button[@class="close"]`);
    }
}