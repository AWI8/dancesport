import GoogleAnalitics from "../../components/ga"

describe('<GoogleAnalitics />', () => {
  it('renders', () => {
    cy.mount(<GoogleAnalitics />)
  })
  it('Width - HscrollOff - Phones', () => {
    cy.mount(<GoogleAnalitics />)
    cy.viewport('iphone-x')
    cy.scrollTo('right', { ensureScrollable: false })
  })
  it('Width - HscrollOff - Desktop', () => {
    cy.mount(<GoogleAnalitics />)
    cy.viewport(1024, 718)
    cy.scrollTo('right', { ensureScrollable: false })
  })
})