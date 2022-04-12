import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/communities/Hero'
import Stats from'../components/communities/Stats'
import SmallClients from '../components/SmallClients'
import ValueProp from '../components/communities/ValueProp'
import Clients from '../components/communities/Clients'
import Contact from '../components/Contact'
import Hacken from '../components/communities/Hacken'

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
        <SmallClients/>

        <ValueProp />
        <Contact />
        <Hacken />

        <Footer />
        <Hamza />
      </div>
    </div>
  )
}
