import Page from 'layouts/page'

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
        <table>
          <tr>
            <th>Topic</th>
            {/* <th>Content</th> */}
            <th>Lecturer</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>Intro to P2P</td>
            {/* <td>
              Peer to peer systems are increasingly moving from the periphery toward the center of how we create and, just as importantly, distribute value.
            </td> */}
            <td><a href="/lecturers">Stacco Troncoso</a></td>
            <td>4 Nov 2019</td>
          </tr>
          <tr>
            <td>Primitives</td>
            {/* <td>
              Hash functions & chaining, symmetric/asymmetric/multi/ring signatures, merkle trees, DHTs, RSMs
            </td> */}
            <td><a href="/lecturers">Lucas Vogelsang</a></td>
            <td>6 Nov 2019</td>
          </tr>
          <tr>
            <td>Social P2P</td>
            {/* <td>
              Scuttlebutt, messaging, communities and users
            </td> */}
            <td><a href="/lecturers">Sarah Friend</a></td>
            <td>11 Nov 2019</td>
          </tr>
          <tr>
            <td>Consensus Mechanisms</td>
            {/* <td>
              Consensus mechanisms: Bitcoin/Nakamoto consensus, BFT
            </td> */}
            <td><a href="/lecturers">Alexis Sellier</a></td>
            <td>13 Nov 2019</td>
          </tr>
          <tr>
            <td>Smart Contracts</td>
            {/* <td>
              Programmable money, legal implications, Ethereum (solidity)
            </td> */}
            <td><a href="/lecturers"></a></td>
            <td>18 Nov 2019</td>
          </tr>
          <tr>
            <td>Security</td>
            {/* <td>
              Key management, smart contract best practices, general secure code frameworks?
            </td> */}
            <td><a href="/lecturers">Liz Steininger</a></td>
            <td>20 Nov 2019</td>
          </tr>
          <tr>
            <td>Mechanism Design</td>
            {/* <td>
              Trust models, incentives, game theory
            </td> */}
            <td><a href="/lecturers">Ele Diakomichalis</a></td>
            <td>25 Nov 2019</td>
          </tr>
          <tr>
            <td>Decentralized Governance</td>
            {/* <td>
              Who has power? Stakeholders, on & off-chain governance; DAOs
            </td> */}
            <td><a href="/lecturers">Gnosis + DAOStack</a></td>
            <td>27 Nov 2019</td>
          </tr>
        </table>
      </div>
    </Page>
  )
}
