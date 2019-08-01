import Link from 'next/link'
import PropTypes from 'prop-types'

import Page from 'layouts/page'

const updateFiles = () => {
  const names =
    preval`module.exports = require("fs").readdirSync("./pages/updates")` || []
  return Promise.resolve(names)
}

const Updates = ({ updates }) => (
  <Page>
    <h1>UPDATES</h1>
    {updates.map((update, i) => (
      <Link href={`/updates/${i + 1}`} key={`updates-${i}`}>
        <a>{update.title}</a>
      </Link>
    ))}
  </Page>
)

Updates.propTypes = {
  updates: PropTypes.array
}

Updates.defaultProps = {
  updates: []
}

Updates.getInitialProps = async () => {
  const names = await updateFiles()
  const metas = names.reduce((collection, name) => {
    collection.push(require(`./updates/${name}`).meta)

    return collection
  }, [])

  return {
    updates: metas
  }
}

export default Updates
