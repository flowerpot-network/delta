import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="#28333D" strokeWidth="2" />
          </svg>
        </a>
      </Link>
      <nav>
        <Link href="/updates">
          <a>updates</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
        <Link href="/protocol">
          <a>protocol</a>
        </Link>
        <Link href="/dapp">
          <a>dapp</a>
        </Link>
      </nav>
    </header>
  )
}
