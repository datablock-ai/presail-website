import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import HowToPresail from '../components/HowToPresail';
import Clients from '../components/Clients'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Presail - token management for web 3.0</title>
        <meta name="description" content="Raise, manage and distribute tokens - all in one place. Whether you're a project, launchpad, VC or public community." key="title" />
      </Head> 
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <HowToPresail />
        <Clients />
        <Blog />
        <Hamza />
        <Footer />
      </div>
    </div>
  )
}
