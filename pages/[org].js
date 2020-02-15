import Layout from '../components/Layout'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'
import request from 'superagent'
import { useRouter } from 'next/router'
import Repo from '../components/Repo'
import Balance from '../components/Balance'
import { ethers } from 'ethers'

function Org({ org: orgRes, repos, balance, ...props }) {
  // const { repos } = repoRes
  // console.log(repos)
  const {
    errorCode,
    login: name,
    avatar_url,
    blog,
    location,
    html_url
  } = orgRes

  // console.log(props)
  const router = useRouter()
  const { org } = router.query

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

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
      <div className ="balance">
        <p className="font-semibold">BALANCE: {ethers.utils.formatEther(balance.result)}</p>
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
      .get(`https://api.etherscan.io/api?module=account&action=balance&address=0x9f2942fF27e40445d3CB2aAD90F84C3a03574F26&tag=latest&apikey=DS3QGS4YV7DQQMN5M5UJVSI2HHHKEENVVS`)
      .set('User-Agent', 'Delta')

    console.log(balance)

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
