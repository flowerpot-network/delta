import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import request from 'superagent'
import Web3Container from '../lib/Web3Container'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import Link from 'next/link'
import { get, set } from '../lib/api'
import getConfig from 'next/config'

const {
  publicRuntimeConfig: { GITHUB_CLIENT_ID }, // Available both client and server side
  serverRuntimeConfig: { GITHUB_CLIENT_SECRET } // Only available server side
} = getConfig()

const uri =
  process.env.NODE_ENV !== 'development'
    ? 'https://flowerpot.network'
    : 'http://localhost:3000'

const OrgBlock = ({ name, orgSlug, org }) => {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const [address, setAddress] = useState('')

  const onSubmit = async e => {
    e.preventDefault()
    await set(orgSlug.toLowerCase(), input)
    setAddress(input)
  }

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const data = await get(orgSlug.toLowerCase())
      setInput(data)
      setLoading(false)
    }
    fetch()
  }, [])

  return (
    <div className="border rounded mb-4 md:flex-wrap md:w-1/2 w-full md:mx-2 p-3">
      <h2 className="font-bold">{name}</h2>
      <Link href={`/${name}`}>
        <a target="_blank">
          {uri}/{name}
        </a>
      </Link>

      <form className="block mt-3" onSubmit={onSubmit}>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
          type="text"
          placeholder={!loading ? 'Address' : 'Loading...'}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Generate Button
        </button>
      </form>

      {address && (
        <div className="mt-8">
          <h2 className="text-2xl">Instructions</h2>
          <p className="mb-3">Copy and past this code on any public readme</p>
          <code className="block bg-gray-900 text-gray-200 rounded p-4 text-sm overflow-hidden overflow-x-scroll">
            [![Sponsor
            me](https://res.cloudinary.com/dvargvav9/image/upload/v1581842794/button2_w5exua.svg)](https://flowerpot.network/
            {orgSlug}?trigger=true)
          </code>
        </div>
      )}
    </div>
  )
}

const Account = props => {
  const cookies = parseCookies()
  const [loading, setLoading] = useState(false)
  const [orgs, setOrgs] = useState(null)
  const [accessToken, setAccessToken] = useState(
    cookies.flowerpot_github_access_token
  )

  useEffect(() => {
    const fetchOrgs = async () => {
      setLoading(true)
      const url = `https://cors-anywhere.herokuapp.com/https://api.github.com/user/orgs?access_token=${accessToken}`
      const res = await request
        .get(url)
        .set('User-Agent', 'Delta')
        .set('X-Requested-With', 'Accept')
      setOrgs(res.body)
      setLoading(false)
    }

    if (accessToken) {
      fetchOrgs()
    }
  }, [accessToken])

  // const onEnable = async () => {
  //   const accounts = await window.ethereum.enable()
  //   setAddress(accounts[0])
  // }

  return (
    <Web3Container
      renderLoading={() => <div>Loading Dapp Page...</div>}
      render={({ web3, accounts, contract }) => {
        return (
          <Layout>
            <div className="mb-8">
              <h1 className="text-5xl font-bold block mb-2 text-center">
                Account Setup
              </h1>
              <p className="text-center text-gray-600 text-xl">
                Link your accounts to begin the process
              </p>
            </div>

            <div className="mb-16 text-center">
              {!accessToken && (
                <a
                  href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${uri}/account&scope=read:org,read:user`}
                >
                  <button className="bg-gray-900 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">
                    Login with GitHub
                  </button>
                </a>
              )}

              {/* {!props.accounts[0] && (
              <button
                onClick={onEnable}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Connect Metamask
              </button>
            )} */}
            </div>
            <div className="md:flex md:-mx-2">
              {loading && <p>Loading...</p>}
              {orgs &&
                orgs.map(org => (
                  <OrgBlock
                    accountAddress={accounts[0]}
                    key={org.login}
                    name={org.login}
                    orgSlug={org.login}
                  />
                ))}
            </div>
          </Layout>
        )
      }}
    />
  )
}

Account.getInitialProps = async ctx => {
  const { code } = ctx.query

  if (code) {
    const res = await request
      .post('https://github.com/login/oauth/access_token')
      .send({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      })

    const { access_token } = res.body

    if (access_token) {
      setCookie(ctx, 'flowerpot_github_access_token', access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      })
      return { accessToken: access_token }
    }
  }
  return {}
}

export default Account
