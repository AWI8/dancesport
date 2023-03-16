describe('App access',()=>{
    it('Shoud been logo text',()=>{
        cy.visit('');
        cy.contains('DanceSport.AM')
    });
});

export {};