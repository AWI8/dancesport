import Header from "../../components/header"

describe('<Header />', () => {
  it('renders', () => {
    cy.mount(<Header />)
  })
  it('Width - HscrollOff - Phones', () => {
    cy.mount(<Header />)
    cy.viewport('iphone-x')
    cy.scrollTo('right', { ensureScrollable: false })
  })
  it('Width - HscrollOff - Desktop', () => {
    cy.mount(<Header />)
    cy.viewport(1024, 718)
    cy.scrollTo('right', { ensureScrollable: false })
  })
})