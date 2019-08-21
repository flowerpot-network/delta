import Page from 'layouts/page'
import Table from 'components/Table'

export default function Index() {
  return (
    <Page>
      <div className="content">
        <h1>Educating the next generation of the peer-to-peer community</h1>
        <p>
          From Bitcoin to Scuttlebutt, from governance to smart contracts, we&apos;ll highlight a spectrum of the technology and projects that have emerged within P2P so that you have what you need to better explore concepts, technology, and careers in this important and quickly evolving space.
        </p>
        <h3>
          The AccessP2P program brings together
        </h3>
        <ul className="specs">
          <li>
            <h4>
              &#9889; 10-12 students who are early-in-career developers
            </h4>
          </li>
          <li>
            <h4>
              &#9889; 8+ lecturers and experts
            </h4>
          </li>
          <li>
            <h4>
              &#9889; 8 evenings during the month of November
            </h4>
          </li>
          <li>
            <h4>
              &#9889; NO cost to students
            </h4>
          </li>
        </ul>
        <h3>
          The Syllabus
        </h3>
        <Table />
      </div>
    </Page>
  )
}
