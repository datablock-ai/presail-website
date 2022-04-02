import Head from 'next/head';

import Header from '../components/Header';
import AboutHero from '../components/AboutHero';
import Employees from '../components/Employees';
import Footer from '../components/Footer';
import HowToPresail from '../components/HowToPresail';

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>About us - Presail</title>
      </Head>
      <div className="antialiased">
        <Header />
        <HowToPresail />
        <AboutHero />
        <Employees />
        <Footer />
      </div>
    </div>
  );
}
