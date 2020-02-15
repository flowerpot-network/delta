import React, { Component, useState, useEffect } from 'react'
import Layout from '../components/Layout'
import request from 'superagent'
import Web3Container from '../lib/Web3Container'
import newBoxClient, { privateGet, privateSet } from '../lib/box'

// import Redis from '../store/redis'
// http://localhost:3000/account?code=6f15d492026b24df701e

// https://github.com/login/oauth/access_token

const OrgBlock = ({ name, initAddress, orgSlug, accountAddress }) => {
  const [input, setInput] = useState(initAddress)
  const [address, setAddress] = useState(null)

  const onSubmit = async () => {
    const { space } = await newBoxClient(accountAddress, window.ethereum)
    await privateSet(space, orgSlug, input)
  }

  useEffect(() => {
    const fetch = async () => {
      const { space } = await newBoxClient(accountAddress, window.ethereum)
      const data = await privateGet(space, orgSlug)
      console.log(data)
    }
    fetch()
  })

  return (
    <div className="border rounded w-1/2 flex-wrap mx-2 p-3">
      <h2>{name}</h2>

      <form className="block" onSubmit={() => setAddress(input)}>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
          type="text"
          placeholder="Address"
          value={address}
          onChange={e => setInput(e.target.value)}
        />
        <button className="btn" type="button">
          Generate Button
        </button>
      </form>

      {address && (
        <div className="mt-8">
          <h2 className="text-2xl">Instructions</h2>
          <p className="mb-3">Copy and past this code on any public readme</p>
          <code className="block bg-gray-900 text-gray-200 rounded p-4 text-sm">
            [![Sponsor
            me](https://localhost:3000/button.svg)](https://localhost:3000/
            {orgSlug}?trigger=true)
          </code>
        </div>
      )}
    </div>
  )
}

const Account = props => {
  const [address, setAddress] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [orgs, setOrgs] = useState(null)

  useEffect(() => {
    // console.log(access_oken)

    console.log('hi', props.access_token)
    // setAccessToken(props.access_token)

    const fetchOrgs = async () => {
      console.log(props, accessToken)
      // setAddress(props.accounts[0])
      const { space } = await newBoxClient(props.accounts[0], window.ethereum)
      console.log(space)
      // await privateSet(space, `gat_${address}`, accessToken)
      const url = `https://api.github.com/user/orgs?access_token=${props.access_token}`
      console.log(url)
      const res = await request.get(url).set('User-Agent', 'Delta')
      console.log(res.body)
      setOrgs(res.body)
    }

    fetchOrgs()

    // const orgs = await fetchOrgs(props.access_token)
    // console.log(orgs)
  }, [props.access_token])

  const onEnable = async () => {
    const accounts = await window.ethereum.enable()
    setAddress(accounts[0])
  }

  // static async getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps)

  //   const { space } = await newBoxClient(prevState.address, window.ethereum)
  //   await privateSet(
  //     space,
  //     `github_${prevState.address}`,
  //     nextProps.access_token
  //   )

  //   return {
  //     space,
  //     accessToken: nextProps.access_token
  //   }
  // }

  return (
    <Web3Container
      renderLoading={() => <div>Loading Dapp Page...</div>}
      render={({ web3, accounts, contract }) => (
        // <Dapp accounts={accounts} contract={contract} web3={web3} />

        <Layout>
          <h1 className="text-3xl font-bold block mb-6">Get started</h1>

          {!props.accounts[0] && (
            <button
              onClick={onEnable}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Connect Metamask
            </button>
          )}

          <a
            href="https://github.com/login/oauth/authorize?client_id=ee508729e6002c32d53b&redirect_uri=http://localhost:3000/account&scope=read:org,user"
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login with GitHub
          </a>

          <div className="flex -mx-2">
            {orgs &&
              orgs.map(org => (
                <OrgBlock
                  accountAddress={address}
                  key={org.login}
                  name={org.login}
                  orgSlug={org.login}
                />
              ))}
          </div>
        </Layout>
      )}
    />
  )
}

const Wrapper = props => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({ web3, accounts }) => (
      <Account accounts={accounts} web3={web3} {...props} />
    )}
  />
)

Wrapper.getInitialProps = async ctx => {
  const { code } = ctx.query

  if (!code) return {}

  try {
    // if (!accessToken) {
    const res = await request
      .post('https://github.com/login/oauth/access_token')
      .send({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      })

    const { access_token } = res.body

    return {
      // orgs: res1.body,
      access_token
    }
  } catch (err) {
    console.log('hi', err.message, err.stack)
    return { error: true }
  }
}

export default Wrapper
