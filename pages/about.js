import Head from 'next/head'

import Header from '../components/Header'
import Employees from '../components/Employees'
import Footer from '../components/Footer'


export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Pricing - Presail</title>
      </Head>
      <div className="antialiased">
        <Header />
        <Employees />
        <Footer />
      </div>
    </div>
  )
}
