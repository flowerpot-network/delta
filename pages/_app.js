import App, { Container } from 'next/app'
import Head from 'next/head'

export default class OscoinApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>oscoin</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
