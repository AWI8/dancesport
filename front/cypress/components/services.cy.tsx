import Services from "../../components/services"

describe('<Services />', () => {
  it('renders', () => {
    cy.mount(<Services />)
  })
  it('Width - HscrollOff - Phones', () => {
    cy.mount(<Services />)
    cy.viewport('iphone-x')
    cy.scrollTo('right', { ensureScrollable: false })
  })
  it('Width - HscrollOff - Desktop', () => {
    cy.mount(<Services />)
    cy.viewport(1024, 718)
    cy.scrollTo('right', { ensureScrollable: false })
  })
})
