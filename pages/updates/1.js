import Update from 'layouts/update'

export const meta = {
  releaseDate: new Date(2019, 9, 20),
  title: 'A Successful P2P Community Requires Diversity'
}

export default function Index() {
  return (
    <Update meta={meta}>
      <p>
        At the end of August 2019, we launched <a href="/">AccessP2P</a>,  an
        open educational program to provide the network and knowledge individuals
        need to transition into the peer-to-peer (P2P) space. Over the course of
        eight lectures in November, our first cohort will receive an introductory
        education across a spectrum of P2P theories, concepts, and technologies. As
        we start to wrap up the application period for our first cohort, we
        reflected on the founding values of the program and our approach to
        supporting diversity in the P2P space.
      </p>
      <p>
        Last year, we recognized a strange juxtaposition: the drive of the
        peer-to-peer community to subvert the dominant norms of today runs
        contradictory to the insulated, homogeneous people we see building and
        creating within this community. We could see that the growth within the P2P
        space - largely within the blockchain domain - mirrored a similar lack of
        diversity so often cited in the greater tech sector. How can we truly
        subvert norms if creators and builders that tend to be “underrepresented”
        continue to be “underrepresented”?
      </p>
      <p>
        In its broadest sense, P2P, as the <a href="https://p2pfoundation.net/the-p2p-foundation/about-the-p2p-foundation">P2P Foundation</a>
        puts it, is “a process or dynamic that can be found in many
        communities and movements self-organising around the co-creation of culture
        and knowledge.” In the technical sense, P2P computing or networking is “a
        distributed application architecture that partitions tasks or workloads
        between peers” (it’s never felt so appropriate to quote <a href="https://en.wikipedia.org/wiki/Peer-to-peer">Wikipedia</a>).
        When we talk about participants in the P2P community, whether from a technical or
        cultural standpoint, there are common motivations: to challenge centralized
        web services, subvert business models and governance structures, and
        increase support for “the commons.” And these ambitions require experts and
        curious individuals who have comprehensive experience in the systems that
        P2P systems attempt to change. These individuals are intimately aware of the
        flaws in these systems, understand their community or users’ needs, and can
        act as an important translator for stakeholders outside P2P. These
        individuals are essential to the success of P2P projects.
      </p>
      <p>
        We wanted to address the lack of diversity within the quickly growing
        and changing P2P community head on. The normalization and adoption of P2P
        technologies, afterall, depends on the diversity of those creating them. So,
        what could we create that could help transition more people - coming from
        different industries, backgrounds, and perspectives - into the P2P space?
        How could we answer the questions: what is P2P, what do I need to know, and
        where can I contribute? AccessP2P was born out of this need for an
        educational entry point.
      </p>
      <p>
        Accessibility is built into AccessP2P’s design: lectures take place in
        the evening so participants can fulfill full-time jobs; the program meets
        twice a week to limit impact on obligations outside of work; the cohort is
        kept small and held in-person to increase comfort among and attention given
        to participants. Alongside of the cohort, we plan to design an asynchronous
        infrastructure for communication and support between those involved with
        AccessP2P. Furthermore, all lecture presentations, additional readings, and
        videos will be posted online for general public access.
      </p>
      <p>
        In an effort to keep the program accessible, we designed the lectures
        to require only a limited knowledge of programming by focusing on curating
        high-level introductions to the projects, technologies, philosophies, and
        people involved in the P2P space. By giving people a comprehensive
        introduction to a breadth of information, we believe we can expose people to
        more topics and current challenges in the space, while giving them the
        necessary resources for continued self-study and support in areas of
        interest. The network of lecturers serves the double purpose of mentors for
        future jobs, technical development, and original projects.
      </p>
      <p>
        At the end of November, we’ll present a new set of contributors to the
        P2P community. Not only will they have an understanding of where and how
        they can plug into the P2P community, abut also the tools and resources to
        deepen their exploration. Importantly, the relationships built within
        AccessP2P will continue to support cohort participants as they start their
        own projects, join companies, and recruit others to the P2P space.
      </p>
      <p>
        In Berlin and curious about P2P? We hope you will be part of our
        effort. Apply for the first AccessP2P cohort via the <a
          href="http://accessp2p.xyz/">website</a> by September 22, 2019.
      </p>
    </Update>
  )
}
