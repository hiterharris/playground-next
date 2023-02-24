import '@/styles/globals.css'
import '@/styles/pageStyles.css'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
