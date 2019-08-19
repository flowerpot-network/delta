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
        <ul>
          <li>
            10-12 students who are early-in-career developers
          </li>
          <li>
            with 8+ lecturers and experts
          </li>
          <li>
            on 8 evenings during the month of November
          </li>
          <li>
            at NO cost to students
          </li>
        </ul>
        <h3>
          The AccessP2P Syllabus
        </h3>
        <table>
          <tr>
            <th>Topic</th>
            <th>Content</th>
            <th>Lecturer</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>Intro to P2P</td>
            <td>
              Peer to peer systems are increasingly moving from the periphery toward the center of how we create and, just as importantly, distribute value.
            </td>
            <td>Stacco Troncoso</td>
            <td>4 Nov 2019</td>
          </tr>
          <tr>
            <td>Primitives</td>
            <td>
              Hash functions & chaining, symmetric/asymmetric/multi/ring signatures, merkle trees, DHTs, RSMs
            </td>
            <td>Lucas Vogelsang</td>
            <td>6 Nov 2019</td>
          </tr>
          <tr>
            <td>Social P2P</td>
            <td>
              Scuttlebutt, messaging, communities and users
            </td>
            <td>Sarah Friend</td>
            <td>11 Nov 2019</td>
          </tr>
          <tr>
            <td>Consensus Mechanisms</td>
            <td>
              Consensus mechanisms: Bitcoin/Nakamoto consensus, BFT
            </td>
            <td>Alexis Sellier</td>
            <td>13 Nov 2019</td>
          </tr>
          <tr>
            <td>Smart Contracts</td>
            <td>
              Programmable money, legal implications, Ethereum (solidity)
            </td>
            <td></td>
            <td>18 Nov 2019</td>
          </tr>
          <tr>
            <td>Security</td>
            <td>
              Key management, smart contract best practices, general secure code frameworks?
            </td>
            <td>Liz Steininger</td>
            <td>20 Nov 2019</td>
          </tr>
          <tr>
            <td>Mechanism Design</td>
            <td>
              Trust models, incentives, game theory
            </td>
            <td>Ele Diakomichalis</td>
            <td>25 Nov 2019</td>
          </tr>
          <tr>
            <td>Decentralized Governance</td>
            <td>
              Who has power? Stakeholders, on & off-chain governance; DAOs
            </td>
            <td>Gnosis + DAOStack</td>
            <td>27 Nov 2019</td>
          </tr>
        </table>
      </div>
    </Page>
  )
}
