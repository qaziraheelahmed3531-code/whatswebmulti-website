import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      padding: '60px 24px 32px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: '#050709'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '48px'
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '38px', height: '38px',
                background: 'linear-gradient(135deg, #00A884, #00E676)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: '900', fontSize: '18px', color: '#000'
              }}>W</div>
              <div>
                <div style={{ fontWeight: '900', fontSize: '15px', color: '#fff' }}>WhatsWebMulti</div>
                <div style={{ fontSize: '11px', color: '#00A884' }}>WhatsApp Web Manager</div>
              </div>
            </div>
            <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.8, maxWidth: '260px' }}>
              The best WhatsApp Web desktop app for managing multiple WhatsApp accounts on Windows and Mac.
            </p>
            <a
              href={`https://wa.me/923075008055`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '16px',
                padding: '10px 20px',
                borderRadius: '10px',
                background: 'rgba(0,168,132,0.1)',
                border: '1px solid rgba(0,168,132,0.2)',
                color: '#00E676',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '700'
              }}
            >
              💬 WhatsApp Support
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: '700', marginBottom: '20px', fontSize: '15px' }}>
              Product
            </h4>
            {[
              { to: '/download', label: 'Download WhatsApp Web App' },
              { to: '/pricing',  label: 'Pricing Plans'             },
              { to: '/#features',label: 'Features'                  },
              { to: '/#how-it-works', label: 'How It Works'         },
              { to: '/#faq',     label: 'FAQ'                       },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  display: 'block',
                  color: '#6B7280',
                  textDecoration: 'none',
                  fontSize: '14px',
                  marginBottom: '10px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.target.style.color = '#00A884'}
                onMouseLeave={e => e.target.style.color = '#6B7280'}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* WhatsApp Web Keywords (SEO) */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: '700', marginBottom: '20px', fontSize: '15px' }}>
              WhatsApp Web
            </h4>
            {[
              'WhatsApp Web PC',
              'WhatsApp Web Multiple Accounts',
              'WhatsApp Web Windows',
              'WhatsApp Web Mac',
              'WhatsApp Web Desktop App',
              'WhatsApp Multi Account',
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  color: '#6B7280',
                  fontSize: '13px',
                  marginBottom: '8px'
                }}
              >
                • {item}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: '700', marginBottom: '20px', fontSize: '15px' }}>
              Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="mailto:support@whatswebmulti.com"
                style={{
                  color: '#6B7280', textDecoration: 'none',
                  fontSize: '14px', display: 'flex',
                  alignItems: 'center', gap: '8px'
                }}
              >
                📧 support@whatswebmulti.com
              </a>
              <a
                href={`https://wa.me/923075008055`}
                style={{
                  color: '#6B7280', textDecoration: 'none',
                  fontSize: '14px', display: 'flex',
                  alignItems: 'center', gap: '8px'
                }}
              >
                💬 WhatsApp: +92 307 500 8055
              </a>
              <div style={{ color: '#6B7280', fontSize: '14px' }}>
                ⏰ Available 24/7
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ color: '#374151', fontSize: '13px' }}>
            © {new Date().getFullYear()} WhatsWebMulti. All rights reserved.
            Not affiliated with WhatsApp Inc. or Meta Platforms.
          </div>
          <div style={{ color: '#374151', fontSize: '13px' }}>
            WhatsApp Web Multiple Accounts Desktop App
          </div>
        </div>
      </div>
    </footer>
  )
}