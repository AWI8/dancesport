import FeedbackForm from "../../components/form"

describe('<FeedBack />', () => {
  it('renders', () => {
    cy.mount(<FeedbackForm />)
  })
  it('Width - HscrollOff - Phones', () => {
    cy.mount(<FeedbackForm />)
    cy.viewport('iphone-x')
    cy.scrollTo('right', { ensureScrollable: false })
  })
  it('Width - HscrollOff - Desktop', () => {
    cy.mount(<FeedbackForm />)
    cy.viewport(1024, 718)
    cy.scrollTo('right', { ensureScrollable: false })
  })
})
