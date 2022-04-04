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
        <title>Presail - fundraising tool for web 3.0</title>
        <meta property="og:title" content="Raise funds in crypto, organize, and distribute tokens - all in one place. Whether you're a project, launchpad, VC or public community." key="title" />
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
