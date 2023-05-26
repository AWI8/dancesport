import Footer from "../../components/footer";

describe('<Footer />', () => {
  it('renders', () => {
    cy.mount(<Footer />)
  })
  it('Width - HscrollOff - Phones', () =>{
    cy.mount(<Footer/>)
    cy.viewport('iphone-x')
    cy.scrollTo('right', { ensureScrollable: false })
  })
  it('Width - HscrollOff - Desktop', () =>{
    cy.mount(<Footer/>)
    cy.viewport(1024,718)
    cy.scrollTo('right', { ensureScrollable: false })
  })
})