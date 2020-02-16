import { useState } from 'react'
import Layout from '../components/Layout'
import Error from 'next/error'
import request from 'superagent'
import { useRouter } from 'next/router'
import Repo from '../components/Repo'
import { get } from '../lib/api'

import { useEffect } from 'react'

function Org({ org: orgRes, repos, ...props }) {
  const [orgAddress, setOrgAddress] = useState('')

  const triggerPayment = () => {
    console.log('run metamask payment')
  }

  const router = useRouter()
  const { trigger, org } = router.query

  if (trigger === 'true') {
    triggerPayment()
  }

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

    if (org.status > 400) {
      return { errorCode: res.status }
    }

    return {
      org: org.body,
      repos: repos.body
    }
  } catch (err) {
    return {
      errorCode: 404
    }
  }
}

export default Org
