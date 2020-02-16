import { useState } from 'react'
import Layout from '../components/Layout'
import request from 'superagent'
// http://localhost:3000/account?code=6f15d492026b24df701e

// https://github.com/login/oauth/access_token

const OrgBlock = ({ name, initAddress, orgSlug }) => {
  const [input, setInput] = useState(initAddress)
  const [address, setAddress] = useState(null)

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
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
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
            me](https://localhost:3000/button.svg)](https://localhost:3000/
            {orgSlug}?trigger=true)
          </code>
        </div>
      )}
    </div>
  )
}

function Account(props) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold block mb-6">Get started</h1>

      <a href="https://github.com/login/oauth/authorize?client_id=ee508729e6002c32d53b&redirect_uri=http://localhost:3000/account&scope=read:org,user">
        Github auth
      </a>
      <div className="flex -mx-2">
        {props.orgs &&
          props.orgs.map(org => (
            <OrgBlock name={org.login} orgSlug={org.login} />
          ))}
      </div>
    </Layout>
  )
}

Account.getInitialProps = async ctx => {
  const { code } = ctx.query

  if (!code) return {}

  try {
    const res = await request
      .post('https://github.com/login/oauth/access_token')
      .send({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code
      })

    const { access_token } = res.body
    const url = `https://api.github.com/user/orgs?access_token=${access_token}`
    const res1 = await request.get(url).set('User-Agent', 'Delta')

    return {
      orgs: res1.body
    }
  } catch (err) {
    console.log('hi', err.message, err.stack)
    return { error: true }
  }
}

export default Account
