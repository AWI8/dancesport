import WarmingText from "../../components/warminup"

describe('<WarmingUp />', () => {
  it('renders', () => {
    cy.mount(<WarmingText />)
  })
  it('Width - HscrollOff - Phones', () => {
    cy.mount(<WarmingText />)
    cy.viewport('iphone-x')
    cy.scrollTo('right', { ensureScrollable: false })
    })
  it('Width - HscrollOff - Desktop', () => {
    cy.mount(<WarmingText />)
    cy.viewport(1024, 718)
    cy.scrollTo('right', { ensureScrollable: false })
  })
})