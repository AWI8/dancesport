describe('Form',()=>{
    it('Valid form works', () => {
        cy.get('input[name="name"]').type('MashaTester');
        cy.get('input[name="tel"]').type('89244290011');
        cy.get('button').click
      });

});

export {};