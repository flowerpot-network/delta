import Layout from '../components/Layout'

export default () => (
  <Layout>
    <h1 className="text-3xl font-bold block mb-6">Get started</h1>

    <form className="block">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        type="text"
        placeholder="Address"
      />

      <button
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Generate Button
      </button>
    </form>
  </Layout>
)
