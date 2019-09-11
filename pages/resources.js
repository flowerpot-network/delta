import Page from 'layouts/page'

const Content = () => {
  return (
    <Page>
      <div className="content">
        <h1>
          Lecture Materials and Related Content
        </h1>
        <br/>
        <nr/>
        <p>
        Throughout the duration of the program, we will post the lecture material and other resources provided to our student cohort. This page will be updated frequently.
        </p>
        <p>
        <h2> Lecture Descriptions </h2>
        <h3>Intro to P2P - <a href= "/lecturers">Stacco Troncoso</a></h3>
        <p>
        When speaking about Peer to Peer or P2P we usually refer to network topologies or technical infrastructures. But what about the people behind those nodes in the network and their effective and physical needs? Beyond techo-centric perspectives, P2P can also mean "person to person" and describes a social process to scale up small-group dynamics into resilient, transnational networks. How can Peer to Peer systems help us reimagine our economics and politics.  As a commons-advocate and project lead for the Commons Transition project, Stacco will discuss the wider implications of P2P.
        </p>
        <br/>
        <h3>Primitives - <a href= "/lecturers">Lucas Vogelsang</a></h3>
        <p>
        P2P software often relies on cryptography to validate behavior of other nodes, keep networks in sync and provide consensus. This session gives a broad overview starting with the very basic primitives such as hash functions, signature schemes but also more complex constructions such as zero knowledge proofs.
        </p>
        <br/>
        <h3>Social P2P- <a href= "/lecturers">Sarah Friend</a></h3>
        <p>
        How would you host a static website on a p2p network? How would you run a blog? What about the best p2p app for sharing photos or messages with your friends? And moreso, once you have your p2p social network in place, what are the unique challenges of social networks in a distributed context? Social networks are built off of trust, but how can we use something like "trust" in computing? This lecture will compare some of the most popular emerging protocols (ipfs, dat, ssb) and discuss their strengths and weakness, borrowing from the early history of the web (usenet, bittorrent) to see what lessons have already been learned.
        </p>
        <br/>
        <h3>Consensus Mechanisms - <a href= "/lecturers">Alexis Sellier</a></h3>
        <p>
        In this lecture we explore the problem of consensus in peer-to-peer systems - or how networked peers come to agree on a single order of events. From early attempts at solving the problem, to the breakthrough discovered by the anonymous creator of the first crypto-currency, we'll learn about why consensus is interesting, where it is used today, and how it can be broken.
        </p>
        <br/>
        <h3>Smart Contracts - <a href= "/lecturers">François Guezengar</a></h3>
        <p>
        You’ll understand how to build and deploy a smart-contract on an Ethereum network. We’ll first take a look at what are smart-contracts, then you’ll write and deploy your own smart-contract in Solidity with the online IDE Remix.
        </p>
        <br/>
        <h3>Security - <a href= "/lecturers">Liz Steininger</a></h3>
        <p>
        TBD
        </p>
        <br/>
        <h3>Mechanism Design - <a href= "/lecturers">Ele Diakomichalis</a></h3>
        <p>
        In this lecture we will provide an introduction to auction and mechanism design as well as a survey of the most relevant topics at the intersection of computer science and economics. We will use real case studies from web search auctions, cryptocurrencies & security applications.
        </p>
        <br/>
        <h3>Decentralized Governance - <a href= "/lecturers">Kei Kreutler</a> and <a href= "/lecturers">Pat Rawson</a></h3>
        <p>
        From its first use, the phrase Decentralized Autonomous Organization conjured an array of potentialities, including legal representation and management for natural systems to imaginaries of independent Skynet-like entities. Kei’s lecture will include a brief working definition of a Decentralized Autonomous Organization (DAO), a history of their implementations to date in relation to decentralized organizing, and an overview of the dxDAO, a project initialized by Gnosis in early 2019 for community governance of software protocols. Some speculations on the future of DAOs will, of course, be interspersed throughout. Pat's lecture will discuss the emergence of collaborative networks and new institutional design patterns. In addition, Pat will present the DAOstack project, a blockchain governance platform that aims to facilitate the creation of superscalable cooperative structures.
        </p>
        </p>
      </div>
    </Page>
  )
}

export default Content
