import React, { Component, useState, useEffect } from 'react'
import Layout from '../components/Layout'
import request from 'superagent'
import Web3Container from '../lib/Web3Container'
import newBoxClient, { privateGet, privateSet } from '../lib/box'
import { useRouter } from 'next/router'

// import Redis from '../store/redis'
// http://localhost:3000/account?code=6f15d492026b24df701e

// https://github.com/login/oauth/access_token

const OrgBlock = ({ name, initAddress, orgSlug, accountAddress }) => {
  const [input, setInput] = useState('')
  const [address, setAddress] = useState('')

  const onSubmit = async e => {
    e.preventDefault()
    console.log('submit')
    const { box } = await newBoxClient(accountAddress, window.ethereum)
    await privateSet(box, orgSlug, input)
    setAddress(input)
  }

  useEffect(() => {
    const fetch = async () => {
      const { box } = await newBoxClient(accountAddress, window.ethereum)
      const data = await privateGet(box, orgSlug)
      setInput(data)
    }
    fetch()
  }, [])

  return (
    <div className="border rounded mb-4  lg:flex-wrap lg:w-1/2 w-full mx-2 p-3">
      <h2>{name}</h2>

      <form className="block" onSubmit={onSubmit}>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
          type="text"
          placeholder="Address"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Generate Button
        </button>
      </form>

      {address && (
        <div className="mt-8">
          <h2 className="text-2xl">Instructions</h2>
          <p className="mb-3">Copy and past this code on any public readme</p>
          <code className="block bg-gray-900 text-gray-200 rounded p-4 text-sm">
            [![Sponsor
            me](https://res.cloudinary.com/dvargvav9/image/upload/v1581842794/button2_w5exua.svg)](https://flowerpot.network/{orgSlug}?trigger=true)
          </code>
        </div>
      )}
    </div>
  )
}

const Account = props => {
  const [orgs, setOrgs] = useState(null)
  const [accessToken, setAccessToken] = useState(props.access_token)

  console.log(props)

  useEffect(() => {
    const check = async () => {
      const { box } = await newBoxClient(props.accounts[0], window.ethereum)
      const accessToken = await privateGet(box, `gat_${props.accounts[0]}`)
      setAccessToken(accessToken)
    }

    if (!props.access_token) {
      check()
    }
  }, [])

  useEffect(() => {
    const save = async () => {
      const { box } = await newBoxClient(props.accounts[0], window.ethereum)

      if (props.accessToken) {
        await privateSet(box, `gat_${props.accounts[0]}`, props.accessToken)
      }
    }
    save()
    // const orgs = await fetchOrgs(props.access_token)
    // console.log(orgs)
  }, [props.accessToken])

  useEffect(() => {
    const fetchOrgs = async () => {
      const url = `https://api.github.com/user/orgs?access_token=${accessToken}`
      const res = await request.get(url).set('User-Agent', 'Delta')
      setOrgs(res.body)
      console.log(res.body)
    }

    fetchOrgs()
  }, [accessToken])

  const onEnable = async () => {
    const accounts = await window.ethereum.enable()
    setAddress(accounts[0])
  }

  return (
    <Web3Container
      renderLoading={() => <div>Loading Dapp Page...</div>}
      render={({ web3, accounts, contract }) => (
        <Layout>
          {/* <p>{accessToken}</p> */}
          <h1 className="text-3xl font-bold block mb-6">Set up your Orgs</h1>
          <div className="">
            {!props.accounts[0] && (
              <button
                onClick={onEnable}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                Connect Metamask
              </button>
            )}
          </div>
          <div className="">
            {!accessToken && (
              <a
                href="https://github.com/login/oauth/authorize?client_id=ee508729e6002c32d53b&redirect_uri=https://flowerpot.network/account&scope=read:org,user"
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
              Login with GitHub
              </a>
            )}
          </div>

          <div className="lg:flex lg:-mx-2">
            {orgs &&
              orgs.map(org => (
                <OrgBlock
                  accountAddress={props.accounts[0]}
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

  const Wrapper = props => {
  const router = useRouter()
  const [accessToken, setAccessToken] = useState(null)

  const { code } = router.query

  // if (!code) return {}

  useEffect(() => {
    const fetch = async () => {
      try {
        // if (!accessToken) {
        const res = await request
          .post(
            'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token'
          )
          .send({
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code
          })

        console.log(res)

        const { access_token } = res.body

        setAccessToken(access_token)
      } catch (err) {
        console.log('hi', err.message, err.stack)
        return { error: true }
      }
    }

    if (code) {
      fetch()
    }
  }, [code])

  return (
    <Web3Container
      renderLoading={() => <div>Loading Dapp Page...</div>}
      render={({ web3, accounts }) => (
        <Account
          accounts={accounts}
          web3={web3}
          accessToken={accessToken}
          {...props}
        />
      )}
    />
  )
}

export default Wrapper
