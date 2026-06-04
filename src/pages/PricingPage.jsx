import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar  from '../components/Navbar'
import Pricing from '../components/Pricing'
import Footer  from '../components/Footer'

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>WhatsApp Web Pricing - WhatsWebMulti Plans</title>
        <meta name="description" content="WhatsApp Web multiple accounts pricing. Free plan with 2 accounts. Paid plans from $3/lifetime. Manage up to 30 WhatsApp Web accounts." />
      </Helmet>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Pricing />
      </div>
      <Footer />
    </>
  )
}