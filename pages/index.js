import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Features from '../components/Features'
import Hamza from '../components/Hamza'
import Footer from '../components/Footer'
import Explainer from '../components/Explainer'


export default function Home() {
  return (
    <div className="antialiased">
      <Header />
      <Hero />
      <Clients />
      <Explainer />
      <Features />
      <Hamza />
      <Footer />
    </div>
  )
}
