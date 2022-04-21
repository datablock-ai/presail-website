import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/distributions/Hero'
import Stats from'../components/distributions/Stats'
import SmallClients from '../components/SmallClients'
import ValueProp from '../components/distributions/ValueProp'

import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'
import Hacken from '../components/communities/Hacken'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Token distributions | Presail</title>
      </Head> 
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <Stats />
        <ValueProp />
        <Contact />
        <Hacken />
        <Footer />
        <Hamza />
      </div>
    </div>
  )
}
