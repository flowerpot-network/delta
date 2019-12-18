import Update from 'layouts/update'

export const meta = {
  releaseDate: new Date(2019, 11, 18),
  title: 'AccessP2P Program is a Wrap: Outcome and What’s Next'
}

export default function Index() {
  return (
    <Update meta={meta}>
      <p>
        We launched AccessP2P this year with the <a href="https://accessp2p.xyz/why">goal</a> of “educating the next generation of the P2P community.” Meaning we wanted to 1. create a repository of materials that introduce people to a breadth of foundational peer-to-peer (P2P) topics and 2. put participants in touch with peers and experts who could support them in developing and implementing new knowledge.
      </p>
      <p>
      During November, we brought together students and experts for a packed and diverse program. <a href="http://accessp2p.xyz/resources">All videos and slides from the lecture have been open sourced</a>, and cover the following topics: Introduction to P2P, Mechanism Design, Network Address Translation, Social P2P, Consensus Mechanisms, Smart Contracts, Security, Primitives, and Decentralized Governance.
      </p>
      <p>
        A program summary in numbers, including some of the survey results from AccessP2P cohort participants:
      </p>
      <img src="https://res.cloudinary.com/juliendonck/image/upload/v1576670009/accessP2P/accessp2p-stats.svg" alt="accessP2P stats"/>
      <p>
      Thank you to everyone who contributed, engaged, and created a welcoming space, including the cohort members as well as lecturers <a href="https://twitter.com/keikreutler">@keikreutler</a> <a href="https://twitter.com/papa_raw">@papa_raw</a> <a href="https://twitter.com/solanasaurus">@solanasaurus</a> <a href="https://twitter.com/kaodro">@kaodro</a> <a href="https://twitter.com/lucasvo">@lucasvo</a> <a href="https://twitter.com/vu3rdd">@vu3rdd</a> <a href="https://twitter.com/liz315">@liz315</a> <a href="https://twitter.com/cloudhead">@cloudhead</a> <a href="https://twitter.com/lftherios">@lftherios</a> <a href="https://twitter.com/StaccoP2P">@StaccoP2P</a> <a href="https://twitter.com/isthisanart_">@isthisanart_</a> <a href="https://twitter.com/TanyaKarsou">@TanyaKarsou</a> and François Guezengar.
      </p>
      <p>
      What’s next? To be determined. We are going to reunite our community of lecturers and students in January to brainstorm. Meanwhile, we’re also speaking with people who are involved with other areas of the P2P community and those have experience in the education space. Want to be involved? Have some words of wisdom? <a href="mailto:hello@accessp2p.xyz">Reach out!</a>
      </p>
    </Update>
  )
}
