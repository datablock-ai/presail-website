import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/fundraising/Hero'
import Stats from'../components/fundraising/Stats'
import ValueProp from '../components/fundraising/ValueProp'

import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hamza from '../components/Hamza'
import Hacken from '../components/communities/Hacken'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Fundraise in web 3.0 | Presail</title>
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
