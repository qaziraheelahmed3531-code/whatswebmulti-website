import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home    from './pages/Home'
import Pricing from './pages/PricingPage'
import Success from './pages/Success'
import Download from './pages/Download'

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#0F1520',
            color: '#F0F4F8',
            border: '1px solid #1A2535',
            borderRadius: '14px',
          }
        }}
      />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/pricing"  element={<Pricing />}  />
        <Route path="/download" element={<Download />} />
        <Route path="/success"  element={<Success />}  />
        <Route path="*"         element={<Home />}     />
      </Routes>
    </BrowserRouter>
  )
}