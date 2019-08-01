import Head from 'next/head'
import PropTypes from 'prop-types'

import 'styles/update.scss'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Update = ({ children, meta }) => (
  <div className="update">
    <Head>
      <title>{meta.title} | oscoin</title>
    </Head>
    <Header />
    <h2>{meta.title}</h2>
    <div className="body">{children}</div>
    <Footer />
  </div>
)

Update.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Update
