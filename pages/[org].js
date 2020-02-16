import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Error from 'next/error'
import request from 'superagent'
import { useRouter } from 'next/router'
import Repo from '../components/Repo'
import Balance from '../components/Balance'
import { ethers } from 'ethers'
import { get } from '../lib/api'

function Org({ org: orgRes, errorCode, repos, balance, ...props }) {
  console.log(props.envs)
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  const [orgAddress, setOrgAddress] = useState('')

  const triggerPayment = async e => {
    console.log('run metamask payment')
    let accounts = await window.ethereum.enable()
    console.log('accounts', accounts)

    const transactionParameters = {
      // need to replace with the org's address
      to: orgAddress,
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

  const { login: name, avatar_url, blog, location, html_url } = orgRes

  if (trigger === 'true') {
    triggerPayment()
  }

  useEffect(() => {
    const fetch = async () => {
      const address = await get(name)
      setOrgAddress(address)
    }
    fetch()
  }, [])

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div><img src={avatar_url} className="w-32 rounded mb-5" /></div>
        <div><h1 className="text-2xl font-bold">{name}</h1></div>
        <div><p>{orgAddress}</p></div>

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
            path=""
          ></svg>
          <span>Support</span>
        </button>
      </div>
      {balance && (
        <div>
          <p className="max-w-sm border p-3 rounded mb-4 shadow-md">
            BALANCE: {ethers.utils.formatEther(balance.result)} ETH
          </p>
        </div>
      )}
      <div className="w-32 rounded mt-5 mb-5">
        <h1 className="text-2xl font-bold">Repositories</h1>
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
    console.log(process.env)
    const org = await request
      .get(`https://api.github.com/orgs/${ctx.query.org}`)
      .set('User-Agent', 'Delta')
      .auth(process.env.GITHUB_CLIENT_ID, process.env.GITHUB_CLIENT_SECRET)

    const repos = await request
      .get(`https://api.github.com/orgs/${ctx.query.org}/repos`)
      .set('User-Agent', 'Delta')
      .auth(process.env.GITHUB_CLIENT_ID, process.env.GITHUB_CLIENT_SECRET)

    const address = await get(org.body.login)

    let balance = null
    try {
      if (address !== '') {
        let balanceRes = await request.get(
          `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=DS3QGS4YV7DQQMN5M5UJVSI2HHHKEENVVS`
        )

        balance = balanceRes.body
      }
    } catch (err) {
      console.log('hiii')
      console.log(err.message)
    }

    if (org.status > 400) {
      return { errorCode: orgRes.status }
    }

    return {
      org: org.body,
      repos: repos.body,
      balance
    }
  } catch (err) {
    return {
      balance: null,
      errorCode: 200,
      envs: process.env
    }
  }
}

export default Org
