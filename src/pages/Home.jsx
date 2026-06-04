import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar        from '../components/Navbar'
import Hero          from '../components/Hero'
import Stats         from '../components/Stats'
import Features      from '../components/Features'
import HowItWorks    from '../components/HowItWorks'
import Pricing       from '../components/Pricing'
import DownloadSection from '../components/Download'
import Testimonials  from '../components/Testimonials'
import FAQ           from '../components/FAQ'
import Footer        from '../components/Footer'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>WhatsApp Web Multiple Accounts - WhatsWebMulti Desktop App</title>
        <meta name="description" content="WhatsApp Web multiple accounts on PC. Run 30+ WhatsApp Web accounts in one window. Free desktop app for Windows & Mac. Download now!" />
        <meta name="keywords" content="whatsapp web, whatsapp web multiple accounts, whatsapp web pc, whatsapp desktop, multiple whatsapp, whatsapp web manager" />
      </Helmet>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Pricing />
      <DownloadSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  )
}