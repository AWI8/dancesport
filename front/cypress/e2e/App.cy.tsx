describe('Main page access',()=>{
    it('Shoud been logo text',()=>{
        cy.visit('');
        cy.contains('DanceSport.AM')
        cy.url().should('include','')
    });
    it('SingIn avaliable',()=>{
        cy.visit('');
        cy.get('a[href*="sing-in"]').click();
        cy.url().should('include','/sing-in');
    });
});

export {};