import React from 'react'

const FEATURES = [
  {
    icon: '💬',
    title: 'Multiple WhatsApp Web Accounts',
    description: 'Run up to 30 WhatsApp Web accounts simultaneously. Switch between accounts with one click. Perfect for businesses managing multiple WhatsApp Web numbers.',
    color: '#00E676',
    keywords: 'whatsapp web multiple accounts'
  },
  {
    icon: '🖥️',
    title: 'WhatsApp Web on Desktop',
    description: 'Full WhatsApp Web experience on your desktop. Better than browser - no tabs, no confusion. WhatsApp Web works faster as a dedicated app.',
    color: '#3D8EFF',
    keywords: 'whatsapp web desktop'
  },
  {
    icon: '🔔',
    title: 'Desktop Notifications',
    description: 'Get WhatsApp Web notifications even when the app is minimized. Never miss a message from any of your WhatsApp Web accounts.',
    color: '#FFB800',
    keywords: 'whatsapp web notifications'
  },
  {
    icon: '🚀',
    title: 'Lightning Fast Performance',
    description: 'WhatsApp Web loads instantly. Optimized for speed - much faster than opening WhatsApp Web in multiple browser tabs.',
    color: '#A855F7',
    keywords: 'whatsapp web fast'
  },
  {
    icon: '🔒',
    title: 'Privacy & Security',
    description: 'Your WhatsApp Web data stays on your device. No data collection, no cloud storage. Complete privacy for all your WhatsApp Web accounts.',
    color: '#FF6B35',
    keywords: 'whatsapp web privacy'
  },
  {
    icon: '💻',
    title: 'Windows & Mac Support',
    description: 'WhatsApp Web desktop app for Windows 10, 11 and macOS. One installation for all your WhatsApp Web accounts.',
    color: '#00A884',
    keywords: 'whatsapp web windows mac'
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            ✨ Features
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: '900', color: '#fff',
            lineHeight: 1.2, marginBottom: '16px'
          }}>
            Everything You Need for{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00A884, #00E676)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              WhatsApp Web
            </span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            The most complete WhatsApp Web solution for Windows and Mac.
            Manage all your WhatsApp Web accounts from one powerful app.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(15,21,32,0.8)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '32px',
                transition: 'all 0.3s',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${f.color}33`
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 20px 60px ${f.color}15`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <div style={{
                width: '56px', height: '56px',
                background: `${f.color}18`,
                border: `1px solid ${f.color}33`,
                borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '26px',
                marginBottom: '20px'
              }}>
                {f.icon}
              </div>

              <h3 style={{
                fontSize: '18px', fontWeight: '800',
                color: '#fff', marginBottom: '12px', lineHeight: 1.3
              }}>
                {f.title}
              </h3>

              <p style={{
                color: '#9CA3AF', fontSize: '14px',
                lineHeight: 1.8
              }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}