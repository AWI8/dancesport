describe('Feedback form', () => {
  it('submits form successfully', () => {
    cy.visit('/sing-in');

    cy.get('input[name="name"]').type('autoTesterFromCypress');
    cy.get('input[name="tel"]').type('88005553535');
    cy.get('form').submit();
    });
});

export {}
