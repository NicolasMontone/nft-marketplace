import type { AppProps } from 'next/app'

import { Layout } from '@/components/Layout'
import { Web3Provider } from '@/providers'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3Provider>
  )
}
