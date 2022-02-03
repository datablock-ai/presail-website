import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Employees from '../components/Employees'
import Footer from '../components/Footer'


export default function Pricing() {
  return (
    <div className="antialiased">
      <Header />
      <Employees />
      <Footer />
    </div>
  )
}
