import Link from 'next/link'
import PropTypes from 'prop-types'

import { getUpdates } from 'api/get-updates'

import Page from 'layouts/page'

const Updates = ({ updates }) => (
  <Page>
    <h1>UPDATES</h1>
    {console.log(updates)}
    {updates.map(update => (
      <Link href={`/updates/${update.id}`} key={`updates-${update.id}`}>
        <a>{update.meta.title}</a>
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
  const updates = await getUpdates()
  return {
    updates: updates
  }
}

export default Updates
