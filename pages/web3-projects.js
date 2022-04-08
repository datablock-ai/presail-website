import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/projects/Hero'
import Stats from'../components/projects/Stats'
import SmallClients from '../components/SmallClients'
import ValueProp from '../components/projects/ValueProp'

import Contact from '../components/Contact'
import Hacken from '../components/communities/Hacken'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail for Web 3.0 Projects</title>
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
