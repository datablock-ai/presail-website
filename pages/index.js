import Head from 'next/head'

import Banner from '../components/Banner'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Investors from '../components/Investors'
import Clients from '../components/Clients'
import Explainer from '../components/Explainer'
import Features from '../components/Features'
import Hamza from '../components/Hamza'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail</title>
      </Head> 
      <div className="antialiased">
        <Banner />
        <Header />
        <Hero />
        <Investors />
        <Clients />
        <Explainer />
        <Features />
        <Hamza />
        <Footer />
      </div>
    </div>
  )
}
