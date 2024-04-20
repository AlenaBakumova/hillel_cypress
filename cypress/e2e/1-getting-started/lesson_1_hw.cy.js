
describe('My First Test', () => {
  it('Visit site and fill out registration form', () => {
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    cy.get('.hero-descriptor_btn.btn.btn-primary').should('exist').click();
    const randomEmail = generateRandomEmail();
    cy.get('input#signupName').type('Name');
    cy.get('input#signupLastName').type('LastName');
    cy.get('input#signupEmail').type(randomEmail); 
    cy.get('input#signupPassword').type('Redirect_123');
    cy.get('input#signupRepeatPassword').type('Redirect_123');
    cy.get('.modal-footer button.btn.btn-primary').click();
    cy.get('#userNavDropdown').click();
    cy.get('.btn.btn-link.text-danger.btn-sidebar.sidebar_btn').click(); 
    cy.get('.btn.btn-outline-white.header_signin').click(); 
    cy.get('input#signinEmail').type(randomEmail); 
    cy.get('input#signinPassword').type('Redirect_123'); 
    cy.get('.modal-footer button.btn.btn-primary').click();
    cy.get('#userNavDropdown').should('exist');
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