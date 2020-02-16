function Balance({ balance, ...props }) {
  console.log(balance)
  return (
    <div> <p> BALANCE </p> </div>
  )
}

Balance.getInitialProps = async (ctx, props) => {
  // console.log(props)
  return { h1: 1 }
}

export default Balance
