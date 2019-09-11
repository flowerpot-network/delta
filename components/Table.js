const Row = ({item1, item4, item2, item3}) => (
  <ul className="row">
    <li>{item1}</li>
    <li><a href="/lecturers">{item2}</a></li>
    <li>{item3}</li>
  </ul>
)

const Table = () => (
  <div className="syllabus">
    <Row
      item1='1. Intro to P2P'
      item2='Stacco Troncoso'
      item3='4 Nov 2019 – 18:30-20:30'
    />

    <Row
      item1='2. Primitives'
      item2='Lucas Vogelsang'
      item3='6 Nov 2019 – 18:30-20:30'
    />

    <Row
      item1='3. Social P2P'
      item2='Sarah Friend'
      item3='11 Nov 2019 – 18:30-20:30'
    />

    <Row
      item1='4. Consensus Mechanisms'
      item2='Alexis Sellier'
      item3='13 Nov 2019 – 18:30-20:30'
    />

    <Row
      item1='5. Smart Contracts'
      item2='François Guezengar'
      item3='18 Nov 2019 – 18:30-20:30'
    />

    <Row
      item1='6. Security'
      item2='Liz Steininger'
      item3='20 Nov 2019 – 18:30-20:30'
    />
    <div className="subline">
    <p>

    </p>
    </div>
    <Row
      item1='7. Mechanism Design'
      item2='Ele Diakomichalis'
      item3='25 Nov 2019 – 18:30-20:30'
    />

    <Row
      item1='8. Decentralized Governance'
      item2='Kei Kreutler and Pat Rawson'
      item3='27 Nov 2019 – 18:30-20:30'
    />

  </div>
)

export default Table
