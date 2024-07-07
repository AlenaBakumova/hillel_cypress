import { BasePage } from './BasePage';

export class FuelExpensesPage extends BasePage {
    addAnExpenseButton(){
        return cy.xpath(`//button[@class="btn btn-primary"]`)
    }
    carSelectDropdown(){
        return cy.xpath(`//button[@id="carSelectDropdown"]`)
    }
    carDropdownList(){
        return cy.xpath(`//ul[@class="car-select-dropdown_menu dropdown-menu show"]`)
    }
    itemOfDropdownList(){
        return cy.xpath(`//li[@class='dropdown-item btn btn-link car-select-dropdown_item'][1]`)
    }
    modalHeaderAddAnExpense(){
        return cy.xpath(`//div[@class="modal-header"]`)
    }
    closeModalAddAnExpense(){
        return cy.xpath(`//div[@class="modal-header"]//button[@class="Close"]`)
    }
    vehicleField(){
        return cy.xpath(`//select[@id="addExpenseCar"]`)
    }
    reporteDatelField(){
        return cy.xpath(`//input[@id="addExpenseDate"]`)
    }
    mileageFieldAddAnExpense(){
        return cy.xpath(`//input[@id="addExpenseMileage"]`)
    }
    mileageAddAnExpense(){
        return cy.xpath(`//input[@class="form-control ng-untouched ng-pristine ng-valid"]`)
    }
    numberOfLitersField(){
        return cy.xpath(`//input[@id="addExpenseLiters"]`)
    }
    totalCostField(){
        return cy.xpath(`//input[@id="addExpenseTotalCost"]`)
    }
    modalFooterAddAnExpense(){
        return cy.xpath(`//div[@class="modal-footer d-flex justify-content-end"]`)
    }
    addButtonAddAnExpense(){
        return cy.xpath(`//div[@class="modal-footer d-flex justify-content-end"]//button[@class="btn btn-primary"]`)
    }
    cancelButtonAddAnExpenser(){
        return cy.xpath(`//div[@class="modal-footer d-flex justify-content-end"]//button[@class="btn btn-secondary"]`)
    }
    fulelExpenceDate(){
        return cy.xpath(`//td[@class="font-weight-bold"]`)
    }
    fulelExpenceDelete(){
        return cy.xpath(`//span[@class="icon icon-delete"]`)
    }
    fulelExpenceRemoveModal(){
        return cy.xpath(`//button[@class="btn btn-danger"]`)
    }

}