import Page from 'layouts/page'
import Lecturer from 'components/Lecturer'

const Partners = () => {
  return (
    <Page>
      <div className="content">
        <h1>
          Our lecturers
        </h1>
        <br/>
        <br/>
        <div className="lecturers">
          <Lecturer
            name="Liz Steininger"
            bio={['Liz is the CEO/Managing Director of ', <a href="https://leastauthority.com/" rel="noopener noreferrer" target="_blank">Least Authority</a>, ' in Berlin, a company supporting people’s right to privacy through security consulting and building secure solutions. Prior, she managed financing for Internet freedom projects at the Open Technology Fund. Liz has over 17 years of experience as a Project Manager, Program Manager and Analyst on numerous tech development projects in both private companies and public organizations. She holds an M.S. in Management & Technology from Carlow University (2007) and B.S. in Digital Media from Drexel University (2001) in the United States of America.']}

            picUrl="https://libertybits.org/wp-content/uploads/2018/02/Liz_Steininger_800x799-e1519724374165.jpg"
            logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566556492/accessP2P/Logo_LeastAuthority_Security.png"
          />
          <Lecturer
            name="Kei Kreutler"
            bio={['Kei is a researcher interested in how cultural narratives of technologies shape their use. Working as Director of Strategy at ',<a href="https://gnosis.io/" rel="noopener noreferrer" target="_blank">Gnosis</a>,', she oversees communications and messaging as the company builds prediction market platforms, decentralized trading protocols, and a smart wallet. She has extensive experience in the realm of decentralized organizing and maintains an independent artistic practice, exhibiting at institutions including the Victoria & Albert Museum, UK and Ideas City at the New Museum, NY, US.']}
            picUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566816506/accessP2P/kreutler_headshot_square.jpg"
            logoUrl="https://dappcon.io/static/gnosis_horizontal-010818f4968ccfec1f6b969e53fd8f39.png"
          />
          <Lecturer
            name="Stacco Troncoso"
            bio={['Stacco Troncoso is the advocacy coordinator of the ',<a href="http://p2pfoundation.net/" rel="noopener noreferrer" target="_blank">P2P Foundation</a>, ' as well as the project lead for ', <a href="https://commonstransition.org/" rel="noopener noreferrer" target="_blank">Commons Transition</a>, ', an organization dedicated to spreading and strengthening the Commons worldwide. He is also co-founder of the P2P translation collective ',<a href="http://guerrillatranslation.com/" rel="noopener noreferrer" target="_blank">Guerrilla Translation</a> ,'. His work in communicating commons culture extends to public speaking and relationship-building with prefigurative communities, policymakers and potential commoners.']}
            picUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566222523/accessP2P/stacco.png"
            logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566556555/accessP2P/Logo_Commons_Transition_IntroP2P.png"
          />

          <Lecturer
            name="Sarah Friend"
            bio={[<a href="https://isthisa.com/" rel="noopener noreferrer" target="_blank">Sarah</a> , ' is an artist and software engineer, with special interest in blockchain and the p2p web. She is a proud Recurse Centre alum, and is one of the organizers of Our Networks, a conference on all aspects of the distributed web in Toronto.']}
            picUrl="https://isthisa.com/static/Headshots/Headshot1.jpg"
            logoUrl=""
          />

          <Lecturer
            name="Lucas Vogelsang"
            bio={['Lucas is co-founder and Head of Engineering at', <a href="https://centrifuge.io/" rel="noopener noreferrer" target="_blank">Centrifuge</a>, ' a Berlin-based company building a protocol for the financial supply chain. Lucas dropped out of college to start his first startup in 2009 in Switzerland. Since then he has worked at various startups around the world in different technical roles. He strongly believes in privacy, and that this technology can be a driving force to make the world a better place.']}
            picUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566223068/accessP2P/Lucas_Centrifuge_Primitives.png"
            logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566223176/accessP2P/centrifuge-logo_ptxefx.png"
          />

          <Lecturer
            name="Alexis Sellier"
            bio={['Long time open source contributor, he recently co-founded ', <a href="http://oscoin.io" rel="noopener noreferrer" target="_blank">Oscoin</a>, ', a project which aims to create a sustainable economy around free software.']}
            picUrl="https://avatars1.githubusercontent.com/u/40774?s=400&v=4"
            logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566303650/accessP2P/opensourcecoin-logo-wide.svg"
          />
          <Lecturer
            name="Eleftherios Diakomichalis"
            bio={['Eleftherios is the co-founder of ', <a href="http://oscoin.io" rel="noopener noreferrer" target="_blank">Oscoin</a>, '. He was an early employee at SoundCloud where he led the Data Science team. His scientific interests lie between network science and statistics, focusing on online communities.']}
            picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1568990825/VsABh_tY_400x400_hwcjd4.jpg"
            logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566303650/accessP2P/opensourcecoin-logo-wide.svg"
          />
          <Lecturer
            name="François Guezengar"
            bio={['François is a blockchain engineer working at the ',<a href = "https://www.ethereum.org/" rel="noopener noreferrer" target="_blank">Ethereum Foundation</a>,' on the project Remix IDE. He is the co-organizer of the Ethereum Meetup group in Berlin. He focuses his work on building tools to simplify developer experience and simplify learning curve.']}
            picUrl = "https://avatars2.githubusercontent.com/u/8143464?s=400&v=4"
            logoUrl="https://ethereum.foundation/images/avatar-icon.png"
          />
          <Lecturer
            name="Pat Rawson"
            bio={['Pat is an accomplished DAO advocate, armchair governance expert, and ',<a href = "https://daostack.io" rel="noopener noreferrer" target="_blank">DAOstack&apos;s</a>,' Comms Lead. He brings unique experience into the blockchain space, having previously worked as an award winning advertising professional for the likes of Disney, HBO, and Universal Pictures.']}
            picUrl = "https://res.cloudinary.com/dvargvav9/image/upload/v1568211671/Pat_DAOstack_Governance_gddrpj.jpg"
            logoUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1568211681/DS_LOGO_BLACK_V01-1_szkmee.svg"
          />
        </div>
      </div>
    </Page>
  )
}

export default Partners
