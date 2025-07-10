describe('Inicia sesion Souce Demo', () => {

    it('Login con credenciales correcta', () => {

        cy.visit('https://www.saucedemo.com/v1/')
        

        //Login 
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        
    });
    
        it('Login con credenciales incorrecta', () => {

        cy.visit('https://www.saucedemo.com/v1/')
        

        //Login 
        cy.get('[data-test="username"]' ).type("standard")
        cy.get('[data-test="password"]').type("1234")
        cy.get('#login-button').click()
        
    });
});