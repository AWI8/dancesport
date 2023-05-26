import Greetings from "../../components/greetings";

describe('<Greetings />', () => {
  it('renders', () => {
    cy.mount(<Greetings />)
  })
  it('Width - HscrollOff - Phones', () => {
    cy.mount(<Greetings />)
    cy.viewport('iphone-x')
    cy.scrollTo('right', { ensureScrollable: false })
  })
  it('Width - HscrollOff - Desktop', () => {
    cy.mount(<Greetings />)
    cy.viewport(1024, 718)
    cy.scrollTo('right', { ensureScrollable: false })
  })
})