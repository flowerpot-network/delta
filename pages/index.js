import Layout from '../components/Layout'
import Link from 'next/link'

const exampleOrgs = [
  {
    name: 'Ethereum',
    image: 'https://avatars1.githubusercontent.com/u/6250754?s=200&v=4',
    imageWidth: '80%'
  },
  {
    name: 'Metamask',
    image: 'https://avatars1.githubusercontent.com/u/11744586?s=200&v=4',
    imageWidth: '50%'
  },
  {
    name: 'Uniswap'
  }
]

export default () => (
  <Layout>
    <div className="text-center mb-4 pb-16 lg:pb-24">
      <span className="text-6xl text-center">✌️🌞✌️</span>
      <h1 className="text-5xl font-bold text-center leading-tight mb-5">
        Growing open source together
      </h1>
      <h3 className="text-2xl text-center text-gray-600">
        Free and open source GitHub sponsors
      </h3>
    </div>

    <div>
      <div className="flex -mx-1">
        {exampleOrgs.map(org => (
          <div className="border rounded flex-wrap items-stretch w-1/2 flex-wrap mx-2 p-3 flex-col flex-grow">
            {/* <div className="text-center">
            <img src={org.image} className="mx-auto" width={org.imageWidth} />
          </div> */}
            <h2 className="font-bold">{org.name}</h2>
            <Link href={`/${org.name.toLowerCase()}`}>Water Flowerpot 🚰</Link>
          </div>
        ))}
      </div>
    </div>

    <div className="text-xl mt-10">
      <p className="text-xl">
        Flowerpots are Ethereum wallets connected to GitHub orgs.
      </p>
      <div className="text-xl mt-8">
        <p className="mb-4">
          <span className="font-bold">Step 1:</span> Search for your org
        </p>
        <code className="block bg-gray-900 text-gray-200 rounded p-4 text-sm">
          https://flowerpot.network/[YOUR_ORG_NAME]
        </code>
      </div>
      <div className="text-xl mt-8">
        <p className="mb-4">
          <span className="font-bold">Step 2:</span> Activate your profile &
          link GitHub
        </p>
      </div>
      <div className="text-xl mt-8">
        <p className="mb-4">
          <span className="font-bold">Step 3:</span> Create a new wallet for
          your GitHub org (i.e.{' '}
          <a href="https://safe.gnosis.io/multisig">a Gnosis safe</a> multisig
          or a <a href="https://metamask.io/">Metamask</a>){' '}
        </p>
      </div>
      <div className="text-xl mt-8">
        <p className="mb-4">
          <span className="font-bold">Step 4:</span> Generate a markdown button
          for README.md's in your GitHub Org!{' '}
        </p>
      </div>
    </div>
    <div className="container mt-16 flex justify-center mx-auto pb-16">
      <section id="flowers">
        <pre>
          <code> _(_)_ _(_)_ </code>
        </pre>
        <pre>
          <code> @@@@ (_)@(_) @@@@ (_)@(_) </code>
        </pre>
        <pre>
          <code> @@()@@ wWWWw (_)\ @@()@@ wWWWw (_)\ </code>
        </pre>
        <pre>
          <code> @@@@ (___) \|/ @@@@ (___) \|/ </code>
        </pre>
        <pre>
          <code> / Y \| / Y \| </code>
        </pre>
        <pre>
          <code> \ | \ |/ | / \ | \ |/ | / </code>
        </pre>
        <pre>
          <code> \\|// \\|/// \\\|// \\|// \\|/// \\\|// </code>
        </pre>
        <pre>
          <code>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</code>
        </pre>
      </section>
    </div>
  </Layout>
)
