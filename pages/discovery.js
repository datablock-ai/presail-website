import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/discovery/Hero'
import Communities from '../components/discovery/Communities'

import Footer from '../components/Footer'
import Hamza from '../components/Hamza'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail - Browse communities</title>
      </Head> 
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <Communities />
        <Footer />
        <Hamza />
      </div>
    </div>
  )
}
