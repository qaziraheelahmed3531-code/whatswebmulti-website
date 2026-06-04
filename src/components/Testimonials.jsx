import React from 'react'

const TESTIMONIALS = [
  {
    name:    'Ahmed Khan',
    role:    'Business Owner',
    country: '🇵🇰 Pakistan',
    avatar:  'A',
    color:   '#00E676',
    rating:  5,
    text:    'WhatsApp Web was always limited to one account. WhatsWebMulti solved everything! Now I manage 5 WhatsApp Web accounts for my business. Best app ever!'
  },
  {
    name:    'Sarah Johnson',
    role:    'Digital Marketer',
    country: '🇺🇸 USA',
    avatar:  'S',
    color:   '#3D8EFF',
    rating:  5,
    text:    'I was opening WhatsApp Web in 5 different browsers. Now everything is in one beautiful app. My productivity doubled. Worth every penny!'
  },
  {
    name:    'Muhammad Ali',
    role:    'E-commerce Manager',
    country: '🇵🇰 Pakistan',
    avatar:  'M',
    color:   '#A855F7',
    rating:  5,
    text:    'Running WhatsApp Web for 10 different client accounts from one screen is incredible. WhatsWebMulti is a game changer for customer support teams.'
  },
  {
    name:    'Carlos Silva',
    role:    'Sales Manager',
    country: '🇧🇷 Brazil',
    avatar:  'C',
    color:   '#FFB800',
    rating:  5,
    text:    'I searched for a WhatsApp Web multiple accounts solution for months. WhatsWebMulti is exactly what I needed. Simple, fast, and reliable!'
  },
  {
    name:    'Fatima Malik',
    role:    'Virtual Assistant',
    country: '🇵🇰 Pakistan',
    avatar:  'F',
    color:   '#FF6B35',
    rating:  5,
    text:    'Managing WhatsApp Web for multiple clients was a nightmare. Now with WhatsWebMulti, I handle everything in one window. My clients love the quick responses!'
  },
  {
    name:    'James Chen',
    role:    'Tech Entrepreneur',
    country: '🇸🇬 Singapore',
    avatar:  'J',
    color:   '#00A884',
    rating:  5,
    text:    'The Enterprise plan with 30 WhatsApp Web accounts is exactly what my team needed. Setup was instant, works perfectly. Highly recommended!'
  },
]

export default function Testimonials() {
  return (
    <section style={{
      padding: '100px 24px',
      overflow: 'hidden'
    }}>
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
            ⭐ User Reviews
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: '900', color: '#fff',
            lineHeight: 1.2, marginBottom: '16px'
          }}>
            10,000+ Happy WhatsApp Web Users
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '18px' }}>
            See what people say about our WhatsApp Web manager
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(15,21,32,0.8)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '28px',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${t.color}33`
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Stars */}
              <div style={{ marginBottom: '16px' }}>
                {'⭐'.repeat(t.rating)}
              </div>

              {/* Text */}
              <p style={{
                color: '#D1D5DB', fontSize: '15px',
                lineHeight: 1.8, marginBottom: '20px',
                fontStyle: 'italic'
              }}>
                "{t.text}"
              </p>

              {/* User */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  background: `${t.color}22`,
                  border: `2px solid ${t.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: '900', fontSize: '18px', color: t.color
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fff', fontSize: '15px' }}>
                    {t.name}
                  </div>
                  <div style={{ color: '#9CA3AF', fontSize: '13px' }}>
                    {t.role} · {t.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}