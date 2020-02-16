import Layout from "../components/Layout";

export default () => (
  <Layout>
  <div className="">
    <h1 className="text-5xl font-bold">Growing open source together 🌞</h1>
    <h3 className="text-2xl">Free and open source GitHub sponsors</h3>
    </div>
  <div className="text-xl mt-10">
    <p>Flowerpots are Ethereum wallets connected to GitHub orgs.</p>
  </div>
  <div className="text-xl mt-8">
    <p className="mb-4"> Step 1: Search for your org</p>
    <code className="block bg-gray-900 text-gray-200 rounded p-4 text-sm">
      https://flowerpot.network/[YOUR_ORG_NAME]
    </code>
  </div>
  <div className="text-xl mt-8">
    <p className="mb-4"> Step 2: Activate your profile & link GitHub</p>
  </div>
  <div className="text-xl mt-8">
    <p className="mb-4"> Step 3: Create a new wallet for your GitHub org (i.e. <a href="https://safe.gnosis.io/multisig">a Gnosis safe</a> multisig or a <a href="https://metamask.io/">Metamask</a>) </p>
  </div>
  <div className="text-xl mt-8">
    <p className="mb-4"> Step 4: Generate a markdown button for README.md's in your GitHub Org! </p>
  </div>
  <div className="container mt-16 flex justify-center mx-auto">
    <section id="flowers">
              <pre><code>                _(_)_                     _(_)_     </code></pre>
              <pre><code>    @@@@       (_)@(_)        @@@@       (_)@(_)    </code></pre>
              <pre><code>   @@()@@ wWWWw  (_)\        @@()@@ wWWWw  (_)\     </code></pre>
              <pre><code>    @@@@  (___)     \|/       @@@@  (___)     \|/   </code></pre>
              <pre><code>     /      Y       \|         /      Y       \|    </code></pre>
              <pre><code>  \ |     \ |/       | /    \ |     \ |/       | /  </code></pre>
              <pre><code>  \\|//   \\|///  \\\|//    \\|//   \\|///  \\\|//  </code></pre>
              <pre><code>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</code></pre>
    </section>
  </div>
  </Layout>
);
