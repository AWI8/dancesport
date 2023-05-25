import Greetings from "../../components/greetings";

describe('<Greetings />', () => {
  it('renders', () => {

    cy.mount(<Greetings />)
  })
})