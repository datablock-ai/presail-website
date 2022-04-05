import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/syndicates/Hero'
import Stats from'../components/syndicates/Stats'
import Clients from '../components/syndicates/Clients'


import Contact from '../components/Contact'
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
        <Clients />
        <Contact />
        <Footer />
        <Hamza />
      </div>
    </div>
  )
}
