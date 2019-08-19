import Page from 'layouts/page'
import Lecturer from 'components/Lecturer'

const Partners = () => {
  return (
    <Page>
      <div className="content">
        <h1>
          Our lecturers
        </h1>
        <div className="lecturers">
          <Lecturer
            name="willy"
            bio="blabla"
            picUrl="https://avatars2.githubusercontent.com/u/2326909?s=400&v=4"
            logoUrl="https://avatars1.githubusercontent.com/u/48515895?s=200&v=4"
          />
        </div>
      </div>
    </Page>
  )
}

export default Partners
