import Layout from '../components/Layout'
import Error from 'next/error'
import request from 'superagent'
import { useRouter } from 'next/router'
import Repo from '../components/Repo'
import { ethers } from 'ethers'

function Org({ org: orgRes, errorCode, repos, balance, ...props }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  const triggerPayment = () => {
    console.log('run metamask payment')
  }

  const router = useRouter()
  const { trigger, org } = router.query

  if (trigger === 'true') {
    triggerPayment()
  }

  // const { repos } = repoRes
  const {
    name,
    // errorCode,
    avatar_url,
    blog,
    location,
    html_url
  } = orgRes

  return (
    <Layout>
      <div className="mb-8">
        <img src={avatar_url} className="w-32 rounded mb-5" />
        <h1 className="text-2xl font-bold">{name}</h1>
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
      <div className="mb-5">
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="https://res.cloudinary.com/dvargvav9/image/upload/v1581816146/heart_resized_ruge9l.svg" viewBox="0 0 20 20"></svg>
      <span>Support</span>
      </button>
      </div>
      <div>
        <p className="max-w-sm border p-3 rounded mb-4 shadow-md">BALANCE: {ethers.utils.formatEther(balance.result)} ETH</p>
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
  console.log('FML')
  try {

    console.log('one')
    const org = await request
      .get(`https://api.github.com/orgs/${ctx.query.org}`)
      .set('User-Agent', 'Delta')
      .auth(process.env.GITHUB_CLIENT_ID, process.env.GITHUB_CLIENT_SECRET)

    console.log('two')
    const repos = await request
      .get(`https://api.github.com/orgs/${ctx.query.org}/repos`)
      .set('User-Agent', 'Delta')
      .auth(process.env.GITHUB_CLIENT_ID, process.env.GITHUB_CLIENT_SECRET)

    console.log('three')
    const balance = await request
      .get(`https://api.etherscan.io/api?module=account&action=balance&address=0x9f2942fF27e40445d3CB2aAD90F84C3a03574F26&tag=latest&apikey=DS3QGS4YV7DQQMN5M5UJVSI2HHHKEENVVS`)
      .set('User-Agent', 'Delta')

    console.log('++++++++++++++++++++++++')
    console.log(process.env.GITHUB_CLIENT_ID)
    console.log(process.env.GITHUB_CLIENT_SECRET)
    console.log(process.env.ETHERSCAN_API_KEY)
    console.log('++++++++++++++++++++++++')
    console.log(org.status)
    if (org.status > 400) {
      return { errorCode: orgRes.status }
    }

    return {
      org: org.body,
      repos: repos.body,
      balance: balance.body,
    }
  } catch (err) {
    return {
      errorCode: 404
    }
  }
}

export default Org
