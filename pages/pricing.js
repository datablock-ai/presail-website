import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/pricing/Hero'
import Premium from '../components/pricing/Premium'
import Contact from '../components/Contact'
import SmallClients from '../components/SmallClients'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'
import Hacken from '../components/communities/Hacken'

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Pricing - Presail</title>
        <meta name="description" content="Raise funds in crypto, organize, and distribute tokens - all in one place." key="title" />
      </Head>
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <Premium />
        <Hacken />
        <SmallClients />
        <Contact />
        <Footer />
        <Hamza />
      </div>
    </div>
  )
}
