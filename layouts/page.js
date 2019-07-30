import PropTypes from 'prop-types'

import 'styles/page.scss'

import Meta from 'components/Meta'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Page = ({ children }) => (
  <div className="page">
    <Meta />
    <Header />
    {children}
    <Footer />
  </div>
)

Page.propTypes = {
  children: PropTypes.element.isRequired
}

export default Page
