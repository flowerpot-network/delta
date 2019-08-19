
const Lecturer = ({name, bio, logoUrl, picUrl}) => (
  <div className="lecturer">
    <img className="avatar" src={picUrl} alt="pic"/>
    <div className="meta">
      <h4>{name}</h4>
      <p>{bio}</p>
      <img src={logoUrl} alt="pic"/>
    </div>
  </div>
)

export default Lecturer
