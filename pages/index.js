import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import HowToPresail from '../components/HowToPresail';
import Clients from '../components/Clients'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail</title>
      </Head> 
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <HowToPresail />
        <Clients />
        <Hamza />
        <Footer />
      </div>
    </div>
  )
}
