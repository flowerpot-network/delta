import Page from 'layouts/page'
import Table from 'components/Table'

export default function Index() {
  return (
    <Page>
      <div className="content">
        <h1>Educating the next generation of the peer-to-peer community</h1>
        <p className="subtitle">
        AccessP2P is an open learning program for developers exploring the peer-to-peer (P2P) space. Whether you are a recent graduate or an experienced developer - AccessP2P will provide you with a comprehensive introduction to the foundations of P2P technology.
        </p>
        <h3>
        The Program
        </h3>
        <p>
        During the month of November, the AccessP2P Program will bring together a cohort of local developers for weekly lectures from local P2P experts. From Bitcoin to Scuttlebutt, from governance to smart contracts, the program will highlight a spectrum of P2P theories, concepts, and technologies.

        Lectures will be hosted by Berlin-based projects and companies, giving the cohort the opportunity to grow their network within the Berlin P2P community.
        </p>
        <br />
        <br />
        <ul className="specs">

          <li>
            <h4>
              &#9889; 8+ lectures from experts in the peer-to-peer space
            </h4>
          </li>
          <li>
            <h4>
              &#9889; Access to mentorship, career, and network opportunities
            </h4>
          </li>
          <li>
            <h4>
              &#9889; NO cost to students
            </h4>
          </li>
        </ul>
        <br />
        <h4>
          Cirriculum
        </h4>
        <br />
        <Table />
        <h3>
        Who should apply?
        </h3>
        <p>
        We expect AccessP2P applicants to have some programming knowledge - whether it be self-taught or otherwise - but are not required to be a traditional 'developer'. We hope to host a cohort with varying levels of technical skills and different backgrounds. As such, we are committed to creating a safe space to answer questions and provide additional resources so that concepts presented are accessible to anybody interested in diving into P2P technology.
        </p>
        <br />
        <br />
        <a className="button" href="https://accessp2p.typeform.com/to/Eu1FCh" target="_blank" align = "center" rel="noopener noreferrer">Apply</a>
      </div>


    </Page>
  )
}
