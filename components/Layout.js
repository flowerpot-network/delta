import Link from 'next/link'

export default ({ children }) => {
  return (
    <div className="antialiased text-gray-900 max-w-4xl m-auto px-4 mt-8">
      <header className="my-3 mb-8 flex justify-between">
        <Link href="/">
          <h1 className="text-2xl cursor-pointer font-semibold">
            🌻 Flowerpot
          </h1>
        </Link>
        <nav>
          <Link
            href="/
          "
          >
            <a className="text-blue-600">My Account </a>
          </Link>
        </nav>
      </header>
      {children}
    </div>
  )
}
