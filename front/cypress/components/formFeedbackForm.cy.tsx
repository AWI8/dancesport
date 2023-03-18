import React from 'react'
import FeedbackForm from '../../components/form'

describe('<FeedbackForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FeedbackForm />);
    cy.get('input[name="name"]').type('MashaTester');
    cy.get('input[name="tel"]').type('dasss');
    cy.get('button').click
  });
});