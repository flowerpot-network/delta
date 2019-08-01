import PropTypes from 'prop-types'

import 'styles/page.scss'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Page = ({ children }) => (
  <div className="page">
    <Header />
    {children}
    <Footer />
  </div>
)

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
