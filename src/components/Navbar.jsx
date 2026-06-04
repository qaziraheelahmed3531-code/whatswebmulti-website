import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen, setMobileOpen]  = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position:   'fixed',
      top:        0,
      left:       0,
      right:      0,
      zIndex:     100,
      padding:    '0 24px',
      height:     '68px',
      display:    'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,14,23,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
      maxWidth: '1200px',
      margin: '0 auto',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%'
    }}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '38px', height: '38px',
          background: 'linear-gradient(135deg, #00A884, #00E676)',
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: '900', fontSize: '18px', color: '#000'
        }}>W</div>
        <div>
          <div style={{ fontWeight: '900', fontSize: '15px', color: '#fff', lineHeight: 1 }}>WhatsWebMulti</div>
          <div style={{ fontSize: '10px', color: '#00A884', lineHeight: 1 }}>WhatsApp Web Manager</div>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {[
          { to: '/',         label: 'Home'     },
          { to: '/pricing',  label: 'Pricing'  },
          { to: '/download', label: 'Download' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              color: location.pathname === to ? '#00E676' : '#9CA3AF',
              background: location.pathname === to ? 'rgba(0,168,132,0.1)' : 'transparent',
              transition: 'all 0.2s'
            }}
          >
            {label}
          </Link>
        ))}

        <a
          href="/download"
          style={{
            padding: '10px 24px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #00A884, #00E676)',
            color: '#000',
            fontWeight: '800',
            fontSize: '14px',
            textDecoration: 'none',
            marginLeft: '8px',
            boxShadow: '0 4px 20px rgba(0,168,132,0.3)',
            transition: 'all 0.2s'
          }}
        >
          ⬇️ Free Download
        </a>
      </div>
    </nav>
  )
}