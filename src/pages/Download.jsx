import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar          from '../components/Navbar'
import DownloadSection from '../components/Download'
import Footer          from '../components/Footer'

export default function Download() {
  return (
    <>
      <Helmet>
        <title>Download WhatsApp Web App - WhatsWebMulti for Windows & Mac</title>
        <meta name="description" content="Download WhatsApp Web desktop app for Windows and Mac. Free download. Run multiple WhatsApp Web accounts. WhatsWebMulti v1.0.0." />
      </Helmet>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <DownloadSection />
      </div>
      <Footer />
    </>
  )
}