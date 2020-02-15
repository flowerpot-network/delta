import Layout from '../components/Layout'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'
import request from 'superagent'
import { useRouter } from 'next/router'
import Repo from '../components/Repo'

function Org({ org: orgRes, repos, ...props }) {
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
