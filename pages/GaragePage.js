import { BasePage } from './BasePage';

export class GaragePage extends BasePage {
   
    AddCarButton(){
        return cy.xpath(`//div[@class="panel-page_heading d-flex justify-content-between"]//button[@class='btn btn-primary"]`)
    }
    modalHeaderAddCar(){
        return cy.xpath(`//div[@class="modal-header"]`)
    }
    closeModalAddCar(){
        return cy.xpath(`//div[@class="modal-header"]//button[@class="Close"]`)
    }
    brandField(){
        return cy.xpath(`//select[@id="addCarBrand"]`)
    }
    modelField(){
        return cy.xpath(`//select[@id="addCarModel"]`)
    }
    mileageField(){
        return cy.xpath(`//select[@id="addCarMileage"]`)
    }
    modalFooterAddCar(){
        return cy.xpath(`//div[@class="modal-footer d-flex justify-content-end"]`)
    }
    addButtonAddCar(){
        return cy.xpath(`//div[@class="modal-footer d-flex justify-content-end"]//button[@class="btn btn-primary"]`)
    }
    cancelButtonAddCar(){
        return cy.xpath(`//div[@class="modal-footer d-flex justify-content-end"]//button[@class="btn btn-secondary"]`)
    }
    editButtonAddCar(){
        return cy.xpath(`//span[@class="icon icon-edit"]`)
    }
    editModalHeaderAddCar(){
        return cy.xpath(`//div[@class="modal-header"]`)
    }
    closeModalEditCar(){
        return cy.xpath(`//div[@class="modal-header"]//button[@class="Close"]`)
    }
    editBrandField(){
        return cy.xpath(`//form[@class="ng-untouched ng-pristine ng-valid"]//select[@id="addCarBrand"]`)
    }
    editModelField(){
        return cy.xpath(`//form[@class="ng-untouched ng-pristine ng-valid"]//select[@id="addCarModel"]`)
    }
    editMileageField(){
        return cy.xpath(`//form[@class="ng-untouched ng-pristine ng-valid"]//select[@id="addCarMileage"]`)
    }
    editModalFooterAddCar(){
        return cy.xpath(`//div[@class="modal-footer d-flex justify-content-end"]`)
    }
    removeCarButton(){
        return cy.xpath(`//div[@class="modal-footer d-flex justify-content-end"]//button[@class="btn btn-outline-danger"]`)
    }
    editCancelCarButton(){
        return cy.xpath(`//div[@class="modal-footer d-flex justify-content-end"]//button[@class="btn btn-secondary"]`)
    }
    editSaveCarButton(){
        return cy.xpath(`//div[@class="modal-footer d-flex justify-content-end"]//button[@class="btn btn-primary"]`)
    }
    addFuelButton(){
        return cy.xpath(`//button[@class="car_add-expense btn btn-success"]`)
    }
    carLogo(){
        return cy.xpath(`//div[@class="car_logo car-logo"]`)
    }
    updateMileage(){
        return cy.xpath(`//p[@class="car_update-mileage"]`)
    }
    tachometerIcon(){
        return cy.xpath(`//span[@class="cupdate-mileage-form_icon icon icon-tachometer"]`)
    }
    inputMileage(){
        return cy.xpath(`//input[@class="update-mileage-form_input form-control ng-untouched ng-pristine ng-valid"]`)
    }
    updateMileageButton(){
        return cy.xpath(`//button[@class="update-mileage-form_submit btn btn-secondary btn-sm"]`)
    }
}