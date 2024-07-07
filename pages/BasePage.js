export class BasePage {

    headerLogo(){
        return cy.xpath(`//a[@class="header_logo"]`)
    }
    headerTab1(){
        return cy.xpath(`//a[@href="/panel/garage"]`)
    }
    headerTab2(){
        return cy.xpath(`//a[@routerlink="expenses" and contains(@class, 'btn') and contains(@class, 'sidebar_btn')]`)
    }
    headerTab3(){
        return cy.xpath(`//a[@href="/panel/instructions"]`)
    }
    profileDropDown(){
        return cy.xpath(`//button[@class="dropdown-toggle user-nav_toggle"]`);
    }
    profileButton1(){
        return cy.xpath(`//a[@routerlink="/panel/garage"]`);
    }
    profileButton2(){
        return cy.xpath(`//a[@routerlink="/panel/expenses"]`);
    }
    profileButton3(){
        return cy.xpath(`//a[@routerlink="/panel/instructions"]`);
    }
    profileButton4(){
        return cy.xpath(`//a[@routerlink="/panel/profile" and contains(@class, 'dropdown-item btn btn-link user-nav_link')]`);
    }
    profileButton5(){
        return cy.xpath(`//a[@routerlink="/panel/settingss"]`);
    }
    logOutButton(){
        return cy.xpath(`//button[@class="dropdown-item btn btn-link user-nav_link"]`);
    }
    footerLogo(){
        return cy.xpath(`//a[@class='footer_logo']`);
    }

}