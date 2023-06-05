import Value from "../../components/value"

describe('<Value />', () => {
  it('renders', () => {
    cy.mount(<Value />)
  })
  it('Width - HscrollOff - Phones', () => {
    cy.mount(<Value />)
    cy.viewport('iphone-x')
    cy.scrollTo('right', { ensureScrollable: false })
    })
  it('Width - HscrollOff - Desktop', () => {
    cy.mount(<Value />)
    cy.viewport(1024, 718)
    cy.scrollTo('right', { ensureScrollable: false })
  })
})