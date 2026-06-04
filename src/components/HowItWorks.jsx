import React from 'react'

const STEPS = [
  {
    num: '01',
    icon: '⬇️',
    title: 'Download WhatsWebMulti',
    desc: 'Click the download button. Get WhatsApp Web as a desktop app for Windows or Mac. Free installation, no account required.',
    color: '#00E676'
  },
  {
    num: '02',
    icon: '📱',
    title: 'Scan QR Code',
    desc: 'Open WhatsWebMulti and scan the QR code with your phone - exactly like WhatsApp Web. Your WhatsApp Web account is ready!',
    color: '#3D8EFF'
  },
  {
    num: '03',
    icon: '➕',
    title: 'Add More Accounts',
    desc: 'Click "Add Account" and scan another QR code. Repeat for all your WhatsApp Web accounts. Manage them all in one window!',
    color: '#A855F7'
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: '100px 24px',
      background: 'rgba(0,168,132,0.02)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0,168,132,0.1)',
            border: '1px solid rgba(0,168,132,0.2)',
            borderRadius: '50px', padding: '6px 16px',
            marginBottom: '20px', fontSize: '13px',
            color: '#00E676', fontWeight: '700'
          }}>
            🚀 How It Works
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: '900', color: '#fff',
            lineHeight: 1.2, marginBottom: '16px'
          }}>
            Start Using WhatsApp Web{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00A884, #00E676)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              in 3 Minutes
            </span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '18px' }}>
            Easier than setting up WhatsApp Web in your browser
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          position: 'relative'
        }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '40px',
                  right: '-16px',
                  width: '32px',
                  height: '2px',
                  background: 'rgba(0,168,132,0.3)',
                  display: 'none' // Show on desktop
                }} />
              )}

              {/* Step number */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: `${step.color}18`,
                border: `2px solid ${step.color}44`,
                fontSize: '32px',
                marginBottom: '24px',
                position: 'relative'
              }}>
                {step.icon}
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '24px',
                  height: '24px',
                  background: step.color,
                  borderRadius: '50%',
                  fontSize: '11px',
                  fontWeight: '900',
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {i + 1}
                </div>
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#fff',
                marginBottom: '12px'
              }}>
                {step.title}
              </h3>

              <p style={{
                color: '#9CA3AF',
                fontSize: '15px',
                lineHeight: 1.8
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a
            href="https://github.com/your-repo/releases/download/v1.0.0/WhatsWebMulti-Setup-1.0.0.exe"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '18px 48px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #00A884, #00E676)',
              color: '#000',
              fontWeight: '900',
              fontSize: '18px',
              textDecoration: 'none',
              boxShadow: '0 16px 48px rgba(0,168,132,0.4)',
            }}
          >
            ⬇️ Download WhatsApp Web App Free
          </a>
        </div>
      </div>
    </section>
  )
}