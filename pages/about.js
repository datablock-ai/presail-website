import Head from 'next/head';

import Header from '../components/Header';
import Hero from '../components/about/Hero';
import Employees from '../components/about/Employees';
import Footer from '../components/Footer';
import Hamza from '../components/Hamza'

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>About us - Presail</title>
        <meta property="og:title" content="Community-driven funding allows anyone, anywhere, to come together and raise capital towards a common goal. Presail is about enabling these communities." key="title" />
      </Head>
      <div className="antialiased selection:bg-main selection:text-white">
        <Header />
        <Hero />
        <Employees />
        <Footer />
        <Hamza />
      </div>
    </div>
  );
}
