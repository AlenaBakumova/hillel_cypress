import { HomePage } from '../../../pages/HomePage';
import { GaragePage } from '../../../pages/GaragePage';
import { FuelExpensesPage } from '../../../pages/FuelExpensesPage'; 
import { BasePage } from '../../../pages/BasePage';

const homePage = new HomePage();
const garagePage = new GaragePage();
const fuelExpensesPage = new FuelExpensesPage();
const basePage = new BasePage();
const signUpPassword = 'Redirect_123';
let email;
const newMileage = 100000;
const liters = 10;
const coastUSD = 100;
const signUpName = 'Name';
const signUpLastName = 'LastName';

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

before(() => {
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    homePage.singUpButton().should('exist').click();
    email = generateRandomEmail();
    homePage.singUpName().type(signUpName).should('have.value', signUpName);
    homePage.singUpLastName().type(signUpLastName).should('have.value', signUpLastName);
    homePage.singUpemail().type(email).should('have.value', email); 
    homePage.singUpPassword().type(signUpPassword).should('have.value', signUpPassword);
    homePage.singUpRepeatPassword().type(signUpPassword).should('have.value', signUpPassword);
    homePage.singUpRegisterButton().click({ force: true });
});

beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    homePage.singInButton().should('exist').click();
    homePage.singInEmail().type(email); 
    homePage.singInPassword().type(signUpPassword); 
    homePage.singInLoginButton().click();   
});

describe('TEST SUITE', () => {
    it('Add new car and check it', () => {
        garagePage.addCarButton().click();
        const mileage = Math.floor(Math.random() * (2000 - 99999 + 1)) + 99999;
        garagePage.mileageField().click().type(mileage.toString()).should('have.value', mileage.toString());
        garagePage.addButtonAddNewCar().click();
        garagePage.inputMileage().should('have.value', mileage);

    });
    it('Add full Expense and check it', () => {
        basePage.headerTab2().click();
        fuelExpensesPage.addAnExpenseButton().click();
        fuelExpensesPage.mileageFieldAddAnExpense().should('be.visible').clear().type(newMileage)
        fuelExpensesPage.numberOfLitersField().click().type(liters);
        fuelExpensesPage.totalCostField().click().type(coastUSD);
        fuelExpensesPage.addButtonAddAnExpense().click();
        fuelExpensesPage.fulelExpenceDate().should('exist');
        });
    it('Delete full Expense and check it', () => {
        basePage.headerTab2().click();
        fuelExpensesPage.fulelExpenceDate().trigger('mouseover');
        fuelExpensesPage.fulelExpenceDelete().click({ force: true });
        fuelExpensesPage.fulelExpenceRemoveModal().click();
        fuelExpensesPage.fulelExpenceDate().should('not.exist');
        });
    it('Delete car and check it', () => {
        garagePage.editCarButton().click();
        garagePage.removeCarButton().click();
        garagePage.removeCarModal().click();
    });
  }); 


