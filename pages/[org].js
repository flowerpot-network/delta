import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Error from 'next/error'
import request from 'superagent'
import { useRouter } from 'next/router'
import Repo from '../components/Repo'
import Balance from '../components/Balance'
import { ethers } from 'ethers'
import { get } from '../lib/api'

function Org({ org: orgRes, repos, balance, ...props }) {
  const [orgAddress, setOrgAddress] = useState('')

  const triggerPayment = async e => {
    console.log('run metamask payment')
    let accounts = await window.ethereum.enable()
    console.log('accounts', accounts)

    const transactionParameters = {
      // need to replace with the org's address
      to: '0x60EAEb46e439b92167205e66CC2C01Ce1e5eB318',
      from: accounts[0], // must match user's active address.
      // we could make this editable
      value: '0x300000000000000' // Only required to send ether to the recipient from the initiating external account.
    }

    window.ethereum.sendAsync(
      {
        method: 'eth_sendTransaction',
        params: [transactionParameters],
        from: accounts[0]
      },
      {}
    )
  }

  const router = useRouter()
  const { trigger, org } = router.query

  const {
    errorCode,
    login: name,
    avatar_url,
    blog,
    location,
    html_url
  } = orgRes

  useEffect(() => {
    const fetch = async () => {
      const address = await get(name)
      setOrgAddress(address)
    }
    fetch()
  }, [])

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <Layout>
      <div className="mb-8">
        <img src={avatar_url} className="w-32 rounded mb-5" />
        <h1 className="text-2xl font-bold">{name}</h1>

        <p>{orgAddress}</p>

        <ul>
          <li>
            <a className="text-blue-600" href={html_url}>
              Github
            </a>
          </li>
          <li>
            <a className="text-blue-600" href={blog}>
              Website
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-5" onClick={triggerPayment}>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          type="submit"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="https://res.cloudinary.com/dvargvav9/image/upload/v1581816146/heart_resized_ruge9l.svg"
            viewBox="0 0 20 20"
          ></svg>
          <span>Support</span>
        </button>
      </div>
      <div>
        <p className="max-w-sm border p-3 rounded mb-4 shadow-md">
          BALANCE: {ethers.utils.formatEther(balance.result)} ETH
        </p>
      </div>
      <div>
        {repos.map(repo => (
          <Repo key={repo.node_id} repo={repo} />
        ))}
      </div>
    </Layout>
  )
}

Org.getInitialProps = async ctx => {
  try {
    const org = await request
      .get(`https://api.github.com/orgs/${ctx.query.org}`)
      .set('User-Agent', 'Delta')
      .auth(process.env.GITHUB_CLIENT_ID, process.env.GITHUB_CLIENT_SECRET)

    const repos = await request
      .get(`https://api.github.com/orgs/${ctx.query.org}/repos`)
      .set('User-Agent', 'Delta')
      .auth(process.env.GITHUB_CLIENT_ID, process.env.GITHUB_CLIENT_SECRET)

    const balance = await request
      .get(
        `https://api.etherscan.io/api?module=account&action=balance&address=0x9f2942fF27e40445d3CB2aAD90F84C3a03574F26&tag=latest&apikey=DS3QGS4YV7DQQMN5M5UJVSI2HHHKEENVVS`
      )
      .set('User-Agent', 'Delta')

    console.log(balance)

    if (org.status > 400) {
      return { errorCode: orgRes.status }
    }

    return {
      org: org.body,
      repos: repos.body,
      balance: balance.body
    }
  } catch (err) {
    return {
      errorCode: 404
    }
  }
}

export default Org
