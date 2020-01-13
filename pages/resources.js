import Page from 'layouts/page'
import Resource from 'components/Resources'

const Content = () => {
  return (
    <Page>
      <div className="content">
        <h1>Lecture Materials and Related Content</h1>
          <br/>
        <div className="resources">
          <Resource
            title={['Intro to P2P - ',<a href= "/lecturers">Stacco Troncoso</a>]}
            description={['When speaking about peer-to-peer or P2P, we usually refer to network topologies or technical infrastructures. But what about the people behind those nodes in the network and their affective and physical needs? Beyond techo-centric perspectives, P2P can also mean "person to person" and describes a social process to scale up small-group dynamics into resilient, transnational networks. How can Peer to Peer systems help us reimagine our economics and politics? As a commons-advocate and project lead for the Commons Transition project, Stacco discusses the wider implications of P2P.']}
            contact={['T: ',<a href="https://twitter.com/StaccoP2P">@staccoP2P</a>]}
            materials= {['Lecture material: ',<a href= "https://drive.google.com/file/d/105MOYl3BCCQIT96lL-87fQTIab3YUzaI/view">slides</a>,' and ',<a href= "https://drive.google.com/open?id=0B7eiTIS0EEaVcXFHN0pWZEtRQm1aOGd4eXhOUmF2V2lqVVIw">summary</a>]}
          />
        </div>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZcmyE8cUQRI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div className="resources">
          <Resource
            title={['Mechanism Design - ',<a href= "/lecturers">Ele Diakomichalis</a>]}
            description={['This lecture provides an introduction to auction and mechanism design as well as a survey of the most relevant topics at the intersection of computer science and economics. This lecture uses real case studies from web search auctions, cryptocurrencies, and security applications']}
            contact={['T: ',<a href="https://twitter.com/lftherios">@lftherios</a>]}
            materials= {['Lecture material: ',<a href= "https://drive.google.com/a/monadic.xyz/file/d/0B7eiTIS0EEaVVkdMRWxxTVlfRGdZVGY1c3ZGbFNhOVh5SUZz/view?usp=sharing">slides</a>,' and ',<a href= "https://drive.google.com/a/monadic.xyz/file/d/0B7eiTIS0EEaVRGIzOGM3MnRnNUo5YjdBX0tOVl9HMTlpQWRB/view?usp=sharing">summary</a>]}
          />
        </div>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/dj8FLVJLPjE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <br/>
        <div className="resources">
          <Resource
            title={['Network Address Translation - ',<a href= "/lecturers">Ram Muthukrishnan</a>]}
            description={['The web was originally designed to be decentralized so every participating computer (often referred to as an endpoint or a node), each assigned an IP address, could participate meaningfully in the network. However, as the usage of the web expanded beyond academia, the IPv4 addresses ran out. Among many ad hoc solutions to address the lack of IPv4 addresses was a system called Network Address Translation (NAT), which is a system where computers in a private network behind one internet facing router are assigned reusable private IP addresses. Even though IPv6 has been introduced, it has not taken off as anticipated by its supporters and the IPv4 + NAT solution still dominates today. Now, the inherent assumptions in the NAT makes it hard to run P2P applications, which act as both clients and servers of data. In this session, we will explore what NAT is, the different types of NAT, what the network topology for various NATs are and the challenges of discovering peers who are behind the NAT.']}
            contact={['W: ',<a href= "https://mastodon.radio/@vu3rdd">https://mastodon.radio/@vu3rdd</a>]}
            materials= {['Lecture material: ',<a href= "https://drive.google.com/file/d/16WDiJuTQ7mGn3aqjbzjem4eXiVf5pVGU/view">slides</a>,' and ',<a href= "https://rkrishnan.org/talks/accessp2p/talk.html">summary</a>]}
          />
        </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JhNSC_McKJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br/>
        <div className="resources">
          <Resource
            title={['Social P2P - ',<a href= "/lecturers">Sarah Friend</a>]}
            description={['How would you host a static website on a P2P network? How would you run a blog? What about the best P2P application for sharing photos or messages with your friends? And moreso, once you have your P2P social network in place, what are the unique challenges of social networks in a distributed context? Social networks are built off of trust, but how can we use something like "trust" in computing? This lecture compares some of the most popular emerging protocols (',<a href = "https://ipfs.io/">IPFS</a>,', ',<a href = "https://dat.foundation/">Dat</a>,', ',<a href = "https://scuttlebutt.nz/">Scuttlebutt</a>,') and discusses their strengths and weakness, borrowing from the early history of the web (',<a href = "https://en.wikipedia.org/wiki/Usenet">Usenet</a>,', ',<a href = "https://www.bittorrent.com/">Bittorrent</a>,') to see what lessons have already been learned.']}
            contact={['T: ',<a href="https://twitter.com/isthisanart_"> @isthisanart_</a>]}
            materials= {['Lecture material: ',<a href= "https://drive.google.com/open?id=1ZLjS2IK1aWC9sd7cuPAs052K1jKYy0e8">slides</a>,' and ',<a href= "https://www.are.na/isthisa/web-of-trust-isdy3f2dhok">additional resources</a>]}
          />
        </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZY_cnpmBYkc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <div className="resources">
          <Resource
            title={['Consensus Mechanisms - ',<a href= "/lecturers">Alexis Sellier</a>]}
            description={['In this lecture, we explore the problem of consensus in peer-to-peer systems - or how networked peers come to agree on a single order of events. From early attempts at solving the problem, to the breakthrough discovered by the anonymous creator of the first cryptocurrency, we discuss why consensus is interesting, where it is used today, and how it can be broken.']}
            contact={['T: ',<a href="https://twitter.com/cloudhead">@cloudhead</a>]}
            materials= {['Lecture material: ',<a href= "https://drive.google.com/open?id=0B7eiTIS0EEaVVGdNNW1sYmFPNWljQ2VKMEM1SjZ2ZklZaFl3">slides</a>]}
          />
        </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ygKvjGqjpCU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <div className="resources">
          <Resource
            title={['Smart Contracts - ',<a href= "/lecturers">François Guezengar</a>]}
            description={['In this lecture, you’ll learn how to build and deploy a smart-contract on an Ethereum network. We first take a look at what smart-contracts are, then you’ll write and deploy your own smart-contract in Solidity with the online IDE Remix.']}
            contact={['Gist: ',<a href="https://gist.github.com/GrandSchtroumpf">https://gist.github.com/GrandSchtroumpf</a>]}
            materials= {['Find the finished smart contract with notes and explanation ',<a href= "https://gist.github.com/GrandSchtroumpf/66ef1bd942eb72df6782955e70795cb4">here</a>]}
          />
        </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/u1nlRS6tmO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <div className="resources">
          <Resource
            title={['Internet Health - ',<a href= "/lecturers">Solana Larsen & Kasia Odrozek</a>]}
            description={['You can find Mozilla’s 2019 Internet Health Report ',<a href="https://internethealthreport.org/2019/">here</a>,' and the 2018 report ',<a href="https://internethealthreport.org/2018/">here.</a>,' Check out ',<a href="https://foundation.mozilla.org/en/initiatives/responsible-cs/">Mozilla Foundation's funding resources</a>,' as well as their latest ',<a href="https://www.grantfortheweb.org//">Grant for the Web.</a>]}
            contact={['T: ',<a href="https://twitter.com/solanasaurus?lang=en">@solanasaurus</a>,' & ',<a href="https://twitter.com/kaodro?lang=en">@kaodro</a>]}
            materials= {['Lecture material: ',<a href= "https://drive.google.com/a/monadic.xyz/file/d/1JnG45Ll7lGNnC4iqIpwGUbpqy1g8yidP/view?usp=sharing">slides</a>]}
          />
        </div>
        <div className="resources">
          <Resource
            title={['Security -  ',<a href= "/lecturers">Liz Steininger</a>]}
            description={['The topic of security encompasses many elements of our technology functioning in a way that keeps us safe from threats. In this lecture, we go through the exercise of threat modeling and talk about the common attacks on P2P networks. We also explore how to reduce the risk of these threats to build and maintain P2P systems that meet their goals of confidentiality, integrity and reliability of the data they provide.']}
            contact={['T: ',<a href="https://twitter.com/liz315?lang=en">@liz315</a>]}
            materials= {['Lecture material: ',<a href= "https://drive.google.com/a/monadic.xyz/file/d/1uNEk3QQQkaF4nWSA_K2r7Bqx1W0LIVIv/view?usp=sharing">slides</a>,' as well as referenced resources from their',<a href = "https://www.youtube.com/watch?v=iRQw2RpQAVc">ZKSnarks Workshop</a>,' (by Mirco Richter) and ',<a href="https://leastauthority.com/blog/all-published-audits/">example auditing work</a>,' (by Least Authority)']}

            />
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wkrWhEFABrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <div className="resources">
          <Resource
            title={['Primitives - ',<a href= "/lecturers">Lucas Vogelsang</a>]}
            description={['P2P software often relies on cryptography to validate the behavior of other nodes, keep networks in sync, and provide consensus. This lecture gives a broad overview starting with the very basic primitives such as hash functions and signature schemes before going into more complex constructions such as zero knowledge proofs.']}
            contact={['T: ',<a href="https://twitter.com/lucasvo?lang=en">@lucasvo</a>]}
          />
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aH18Tc-evMU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <div className="resources">
          <Resource
            title={['Decentralized Governance - ',<a href= "/lecturers">Kei Kreutler & Pat Rawson</a>]}
            description={['From its first use, the phrase Decentralized Autonomous Organization conjured an array of potentialities, including legal representation and management for natural systems to imaginaries of independent Skynet-like entities. Kei’s lecture includes a brief working definition of a Decentralized Autonomous Organization (DAO), a history of their implementations to date in relation to decentralized organizing, and an overview of the ',<a href="https://dxdao.daostack.io/">dxDAO</a>,', a project initialized by Gnosis in early 2019 for community governance of software protocols. Some speculations on the future of DAOs will, of course, be interspersed throughout. Pat`s lecture discusses the emergence of collaborative networks and new institutional design patterns. In addition, Pat will present the ',<a href="https://daostack.io/">DAOstack</a>, 'project, a blockchain governance platform that aims to facilitate the creation of superscalable cooperative structures.']}
            materials= {['Lecture material: ', <a href= "https://drive.google.com/a/monadic.xyz/file/d/1Gmw0M4hwzqoVnnGPD-kDThQ7bBkevgp7/view?usp=sharing">Kei's slides (on decentralized governance)</a>, ' & ', <a href= "https://drive.google.com/a/monadic.xyz/file/d/1mRbxB_o6GNoKq47IXMGbJpcS7tP_uYHQ/view?usp=sharing">Pat's slides (on DAOs)</a>]}
          />
        </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/BVJTVzqmWxM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>

      <h2> Introductory Content </h2>
        <h3> 📚  Blockchain  101 </h3>
          <p><a href="https://youtu.be/_160oMzblY8">Part 1 - A Visual Demo</a></p>
          <br/>
          <p><a href="https://www.youtube.com/watch?v=xIDL_akeras">Part 2 - Public / Private Keys and Signing</a></p>
        <h3> 📝  Networking  101 </h3>
          <ul className="list">
            <li>
              <a href= "https://files.ifi.uzh.ch/CSG/staff/bocek/extern/theses/BA-Jonas-Wagner.pdf">UDP Hole Punching in TomP2P for NAT Traversal</a>
            </li>
            <li>
              <a href= "https://pdos.csail.mit.edu/papers/p2pnat.pdf">Peer-to-Peer Communication Across Network Address Translators</a>
            </li>
            <li>
              <a href= "https://www.nrl.navy.mil/itd/chacs/sites/www.nrl.navy.mil.itd.chacs/files/pdfs/Dingledine%20etal2004.pdf">Tor: The Second-Generation Onion Router" Paper</a>
            </li>
          </ul>
        </div>
    </Page>
  )
}

export default Content
