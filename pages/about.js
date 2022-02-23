import Head from 'next/head'

import Header from '../components/Header'
import AboutHero from '../components/AboutHero'
import Employees from '../components/Employees'
import Footer from '../components/Footer'


export default function Pricing() {
  return (
    <div>
      <Head>
        <title>About us - Presail</title>
      </Head>
      <div className="antialiased">
        <Header />
        <AboutHero />
        <Employees />
        <Footer />
      </div>
    </div>
  )
}
