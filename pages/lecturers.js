import Page from 'layouts/page'
import Lecturer from 'components/Lecturer'

const Partners = () => {
  return (
    <Page>
      <div className="content">
        <h1>
          Our lecturers
        </h1>
        <div className="lecturers">
          <Lecturer
            name="Liz Steininger"
            bio={['Liz is the CEO/Managing Director of ', <a href="https://leastauthority.com/" rel="noopener noreferrer" target="_blank">Least Authority</a>, ' in Berlin, a company supporting people’s right to privacy through security consulting and building secure solutions. Prior, she managed financing for Internet freedom projects at the Open Technology Fund. Liz has over 17 years of experience as a Project Manager, Program Manager and Analyst on numerous tech development projects in both private companies and public organizations. She holds an M.S. in Management & Technology from Carlow University (2007) and B.S. in Digital Media from Drexel University (2001) in the United States of America.']}

            picUrl="https://libertybits.org/wp-content/uploads/2018/02/Liz_Steininger_800x799-e1519724374165.jpg"
            logoUrl="https://leastauthority.com/static/img/logo.svg?h=446fe5d7"
          />
          <Lecturer
            name="Stacco Troncoso"
            bio={['Stacco Troncoso is the advocacy coordinator of the ',<a href="http://p2pfoundation.net/" rel="noopener noreferrer" target="_blank">P2P Foundation</a>, ' as well as the project lead for ', <a href="https://commonstransition.org/" rel="noopener noreferrer" target="_blank">Commons Transition</a>, ', an organization dedicated to spreading and strengthening the Commons worldwide. He is also co-founder of the P2P translation collective ',<a href="http://guerrillatranslation.com/" rel="noopener noreferrer" target="_blank">Guerrilla Translation</a> ,'. His work in communicating commons culture extends to public speaking and relationship-building with prefigurative communities, policymakers and potential commoners.']}
            picUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566222523/accessP2P/stacco.png"
            logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566222775/accessP2P/Logo_P2PFoundation_IntroP2P.png"
          />
          <Lecturer
            name="Alexis Sellier"
            bio={['Alexis is the co-founder of ', <a href="https://monadic.xyz/" rel="noopener noreferrer" target="_blank">Monadic</a> ,' the company behind ', <a href="http://oscoin.io" rel="noopener noreferrer" target="_blank">Oscoin</a>, ', a decentralized network and currency for OSS collaboration and incentivisation. Long time open source contributor, he recently co-founded Monadic\'s first project open source coin, a project which aims to create a sustainable economy around open source software.']}
            picUrl="https://avatars1.githubusercontent.com/u/40774?s=400&v=4"
            logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566303650/accessP2P/opensourcecoin-logo-wide.svg"
          />
          <Lecturer
            name="Sarah Friend"
            bio={[<a href="https://isthisa.com/" rel="noopener noreferrer" target="_blank">Sarah</a> , ' is an artist and software engineer, with special interest in blockchain and the p2p web. She is a proud Recurse Centre alum, and is one of the organizers of Our Networks, a conference on all aspects of the distributed web in Toronto.']}
            picUrl="https://isthisa.com/static/Headshots/Headshot1.jpg"
            logoUrl=""
          />
          <Lecturer
            name="Eleftherios Diakomichalis"
            bio={['Eleftherios is the co-founder of ', <a href="https://monadic.xyz/" rel="noopener noreferrer" target="_blank">Monadic</a> ,' the company behind ', <a href="http://oscoin.io" rel="noopener noreferrer" target="_blank">Oscoin</a>, '. He was an early employee at SoundCloud where he led the Data Science team. His scientific interests lie between network science and statistics, focusing on online communities.']}
            picUrl="https://pbs.twimg.com/profile_images/894635919340441600/VsABh_tY_400x400.jpg"
            logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566303650/accessP2P/opensourcecoin-logo-wide.svg"
          />
          <Lecturer
            name="Lucas Vogelsang"
            bio={['Lucas is the founding engineer at ',<a href="https://centrifuge.io/" rel="noopener noreferrer" target="_blank">Centrifuge</a>,', an open, decentralized platform to connect the global financial supply chain.']}
            picUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566223068/accessP2P/Lucas_Centrifuge_Primitives.png"
            logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566223176/accessP2P/centrifuge-logo_ptxefx.png"
          />
          <Lecturer
            name="Gnosis"
            bio={['[Speaker from Gnosis - a project builds new market mechanisms to redistribute the future - is to be determined. Check back Aug 30.]']}
            picUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566554835/accessP2P/gnosis_bio.png"
            logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1566554865/accessP2P/gnosis_logo.png"
          />
        </div>
      </div>
    </Page>
  )
}

export default Partners
