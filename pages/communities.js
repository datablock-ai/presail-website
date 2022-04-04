import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/communities/Hero'
import Stats from'../components/communities/Stats'

import HowToPresail from '../components/communities/HowToPresail';
import Clients from '../components/communities/Clients'
import Contact from '../components/communities/Contact'
import CTA from '../components/launchpad/CTA'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail for Community Groups</title>
      </Head> 
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <Stats />
        <HowToPresail />
        <Clients />
        <Contact />
        <Footer />
        <Hamza />
      </div>
    </div>
  )
}
