import Link from 'next/link'

export default ({ children }) => {
  return (
    <div className="antialiased text-gray-900 max-w-4xl m-auto px-4">
      <header className="my-3 mb-8 flex justify-between">
        <Link href="/">
          <h1 className="text-xl cursor-pointer font-semibold">Delta</h1>
        </Link>
        <nav>
          <Link href="/account">
            <a className="text-blue-600">My account</a>
          </Link>
        </nav>
      </header>
      {children}
    </div>
  )
}
