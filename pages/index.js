import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Hamza from '../components/Hamza'
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
        <Clients />
        <Footer />
      </div>
    </div>
  )
}
