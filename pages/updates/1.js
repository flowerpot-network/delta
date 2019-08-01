import Update from 'layouts/update'

export const meta = {
  title: 'One cool update'
}

export default function Index() {
  return (
    <Update meta={meta}>
      <p>First paragraph in a long article.</p>
    </Update>
  )
}
