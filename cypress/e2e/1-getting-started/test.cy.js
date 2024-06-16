class BaseSteps {
    login(email, password) {
        homePage.singInButton().should('exist').click();
        homePage.singInEmail().type(email);
        homePage.singInPassword().type(password);
        homePage.singInLoginButton().click();
    }
}

class GarageSteps extends BaseSteps {
    addCar(mileage) {
        garagePage.addCarButton().click();
        garagePage.mileageField().click().type(mileage.toString()).should('have.value', mileage.toString());
        garagePage.addButtonAddNewCar().click();
    }

    deleteCar() {
        garagePage.editCarButton().click();
        garagePage.removeCarButton().click();
        garagePage.removeCarModal().click();
    }
}

class FuelExpensesSteps extends BaseSteps {
    addFuelExpense(mileage, liters, costUSD) {
        basePage.headerTab2().click();
        fuelExpensesPage.addAnExpenseButton().click();
        fuelExpensesPage.mileageFieldAddAnExpense().should('be.visible').clear().type(mileage.toString());
        fuelExpensesPage.numberOfLitersField().click().type(liters.toString());
        fuelExpensesPage.totalCostField().click().type(costUSD.toString());
        fuelExpensesPage.addButtonAddAnExpense().click();
    }

    deleteFuelExpense() {
        basePage.headerTab2().click();
        fuelExpensesPage.fulelExpenceDate().trigger('mouseover');
        fuelExpensesPage.fulelExpenceDelete().click({ force: true });
        fuelExpensesPage.fulelExpenceRemoveModal().click();
    }
}
const garageSteps = new GarageSteps();
const fuelExpensesSteps = new FuelExpensesSteps();
const signUpPassword = 'Redirect_123';
let email;

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
    garageSteps.login(email, signUpPassword);
});

describe('TEST SUITE', () => {
    it('Add new car and check it', () => {
        const mileage = Math.floor(Math.random() * (2000 - 99999 + 1)) + 99999;
        garageSteps.addCar(mileage);
        garagePage.inputMileage().should('have.value', mileage);
    });

    it('Delete car and check it', () => {
        const mileage = Math.floor(Math.random() * (2000 - 99999 + 1)) + 99999;
        garageSteps.addCar(mileage);
        garageSteps.deleteCar();
    });

    it('Add full Expense and check it', () => {
        const mileage = Math.floor(Math.random() * (2000 - 99999 + 1)) + 99999;
        fuelExpensesSteps.addFuelExpense(mileage, liters, coastUSD);
        fuelExpensesPage.fulelExpenceDate().should('exist');
    });

    it('Delete full Expense and check it', () => {
        const mileage = Math.floor(Math.random() * (2000 - 99999 + 1)) + 99999;
        fuelExpensesSteps.addFuelExpense(mileage, liters, coastUSD);
        fuelExpensesSteps.deleteFuelExpense();
        fuelExpensesPage.fulelExpenceDate().should('not.exist');
    });
});