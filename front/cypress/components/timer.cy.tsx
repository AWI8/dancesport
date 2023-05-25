import Countdown from "../../components/timer"

describe('<Timer />', () => {
    it('renders', () => {
      cy.mount(<Countdown />)
    })
  })