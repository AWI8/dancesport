import Formplate from "../../components/formplate"

describe('<Formplate />', () => {
  it('renders', () => {
    cy.mount(<Formplate />)
  })
  it('Width - HscrollOff - Phones', () =>{
    cy.mount(<Formplate/>)
    cy.viewport('iphone-x')
    cy.scrollTo('right', { ensureScrollable: false })
  })
  it('Width - HscrollOff - Desktop', () =>{
    cy.mount(<Formplate/>)
    cy.viewport(1024,718)
    cy.scrollTo('right', { ensureScrollable: false })
  })
})