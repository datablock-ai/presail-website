import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import HowToPresail from '../components/HowToPresail';
import Clients from '../components/Clients'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail</title>
      </Head> 
      <div className="antialiased">
        <Header />
        <Hero />
        <HowToPresail />
        <Clients />
        <Footer />
      </div>
    </div>
  )
}
