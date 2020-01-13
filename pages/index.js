import Page from 'layouts/page'
import Table from 'components/Table'

export default function Index() {
  return (
    <Page>
      <div className="content">
        <h1>Educating the next generation of the peer-to-peer community</h1>
        <h3>
          AccessP2P is an open learning program for exploring the peer-to-peer (P2P) space. Regardless of your level of technical skills, AccessP2P will provide you with a comprehensive introduction to the foundations of P2P technology and process.
        </h3>
        <h3>
          The Program
        </h3>
        <p>
        During the month of November, the AccessP2P Program brought together a cohort of 10 students for weekly lectures from local P2P experts - at no cost to students. From Bitcoin to Scuttlebutt, from governance to smart contracts, the program highlighted a spectrum of P2P theories, concepts, and technologies. A total of <a href = "/resources">ten lectures</a>  were hosted by local projects and companies and gave the cohort the opportunity to grow their network within the Berlin P2P community.
        </p>
        <br />
        <h3>
          The Curriculum
        </h3>
        <br />
        <Table />
        <br />
        <p>
        View lecture descriptions, videos, and materials <a href = "/resources">here</a>.
        </p>
        <h3>
          Who is AccessP2P for?
        </h3>
        <p>
          While AccessP2P participants have some programming knowledge - whether it be self-taught or otherwise - not all of them are traditional 'developers'. Given the varying levels of technical skills and different backgrounds, lecturers designed material with the intention of being accessible to anybody interested in diving into P2P technology. Check out our <a href = "/resources">Resources</a> page for their lecture materials and related content.
        </p>
        <br />
      </div>
    </Page>
  )
}
