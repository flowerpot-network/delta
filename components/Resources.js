import PropTypes from 'prop-types'

const Resource = ({title, description, contact, materials, additional}) => (
  <div className="resource">
    <div className="meta">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{contact}</p>
      <p>{materials}</p>
      <p>{additional}</p>
    </div>

  </div>
)

export default Resource


Resource.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  contact: PropTypes.string.isRequired,
  materials: PropTypes.string,
  additionals: PropTypes.string.isRequired,
}
