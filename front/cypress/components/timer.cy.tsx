import Countdown from "../../components/timer"

describe('<Timer />', () => {
  it('renders', () => {
    cy.mount(<Countdown />)
  })
  it('Width - HscrollOff - Phones', () => {
    cy.mount(<Countdown />)
    cy.viewport('iphone-x')
    cy.scrollTo('right', { ensureScrollable: false })
    })
  it('Width - HscrollOff - Desktop', () => {
    cy.mount(<Countdown />)
    cy.viewport(1024, 718)
    cy.scrollTo('right', { ensureScrollable: false })
  })
})