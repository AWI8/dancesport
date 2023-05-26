import About from "../../components/about";

describe('<About />', () => {
  it('Render', () => {
    cy.mount(<About />)
  });
  it('Width - HscrollOff - Phones', () =>{
    cy.mount(<About/>)
    cy.viewport('iphone-x')
    cy.scrollTo('right', { ensureScrollable: false })
  })
  it('Width - HscrollOff - Desktop', () =>{
    cy.mount(<About/>)
    cy.viewport(1024,718)
    cy.scrollTo('right', { ensureScrollable: false })
  })
})