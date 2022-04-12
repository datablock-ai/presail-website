import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/syndicates/Hero'
import Stats from'../components/syndicates/Stats'
import SmallClients from '../components/SmallClients'
import ValueProp from '../components/syndicates/ValueProp'

import Contact from '../components/Contact'
import Hacken from '../components/communities/Hacken'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail for Private Syndicates</title>
      </Head> 
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <Stats />
        <SmallClients />
        <ValueProp />
        <Contact />
        <Hacken />
        <Footer />
        <Hamza />
      </div>
    </div>
  )
}
