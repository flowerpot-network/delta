import React, { Component, useState, useEffect } from 'react'
import Layout from '../components/Layout'
import request from 'superagent'
import Web3Container from '../lib/Web3Container'
// import newBoxClient, { privateGet, privateSet } from '../lib/box'
import { get, set } from '../lib/api'
import { useRouter } from 'next/router'

// import Redis from '../store/redis'
// http://localhost:3000/account?code=6f15d492026b24df701e

// https://github.com/login/oauth/access_token

const OrgBlock = ({ name, orgSlug, org }) => {
  const [input, setInput] = useState('')
  const [address, setAddress] = useState('')

  const onSubmit = async e => {
    e.preventDefault()
    console.log('submit')
    // const { box } = await newBoxClient(accountAddress, window.ethereum)
    await set(orgSlug, input)
    setAddress(input)
  }

  useEffect(() => {
    const fetch = async () => {
      //  const { box } = await newBoxClient(accountAddress, window.ethereum)
      const data = await get(orgSlug)
      setInput(data)
    }
    fetch()
  }, [])

  console.log(org)

  return (
    <div className="border rounded mb-4 md:flex-wrap md:w-1/2 w-full md:mx-2 p-3">
      <h2 className="font-bold">{name}</h2>
      <a href={`https://github.com/${name}`}>https://github.com/{name}</a>

      <form className="block mt-3" onSubmit={onSubmit}>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
          type="text"
          placeholder="Address"
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
  const [orgs, setOrgs] = useState(null)
  const [accessToken, setAccessToken] = useState(props.accessToken)

  useEffect(() => {
    const check = async () => {
      const accessToken = await get(`gat_${props.accounts[0]}`)

      setAccessToken(accessToken)
    }

    if (!props.accessToken) {
      check()
    }

    const save = async () => {
      if (props.accessToken) {
        await set(`gat_${props.accounts[0]}`, props.accessToken)
        setAccessToken(props.accessToken)
      }
    }
    save()
    // const orgs = await fetchOrgs(props.access_token)
    // console.log(orgs)
  }, [props.accessToken])

  useEffect(() => {
    const fetchOrgs = async () => {
      const url = `https://cors-anywhere.herokuapp.com/https://api.github.com/user/orgs?access_token=${accessToken}`
      const res = await request
        .get(url)
        .set('User-Agent', 'Delta')
        .set('X-Requested-With', 'Accept')
      setOrgs(res.body)
      console.log(res.body)
    }
    if (accessToken) {
      fetchOrgs()
    }
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
              <a href="https://github.com/login/oauth/authorize?client_id=ee508729e6002c32d53b&redirect_uri=https://flowerpot.network/account&scope=read:org,read:user">
                <button className="bg-gray-900 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">
                  Login with GitHub
                </button>
              </a>
            )}

            {!props.accounts[0] && (
              <button
                onClick={onEnable}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Connect Metamask
              </button>
            )}
          </div>

          <div className="md:flex md:-mx-2">
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

  useEffect(() => {
    const fetch = async () => {
      try {
        // if (!accessToken) {
        console.log(
          'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token'
        )
        const res = await request
          .post(
            'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token'
          )
          .set('X-Requested-With', 'Accept')
          .send({
            client_id: 'ee508729e6002c32d53b',
            client_secret: 'e8ed912f2b6fdcccbef5aecfcfb23a1d4b3dea13',
            code
          })

        console.log(res)

        const { access_token } = res.body

        setAccessToken(access_token)
      } catch (err) {
        console.log('hi', err.message, err.stack)
        throw err
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
