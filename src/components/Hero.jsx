import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TYPING_TEXTS = [
  'Multiple WhatsApp Accounts',
  'WhatsApp Web on PC',
  'WhatsApp Business Manager',
  '30 Accounts in One Window',
]

export default function Hero() {
  const [typingIndex, setTypingIndex] = useState(0)
  const [displayed,   setDisplayed]   = useState('')
  const [deleting,    setDeleting]    = useState(false)

  useEffect(() => {
    const current = TYPING_TEXTS[typingIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTypingIndex((typingIndex + 1) % TYPING_TEXTS.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, typingIndex])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
      paddingBottom: '80px',
    }}>
      {/* Background Effects */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Main glow */}
        <div style={{
          position: 'absolute', top: '10%', left: '50%',
          transform: 'translateX(-50%)',
          width: '800px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(0,168,132,0.08) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: `
            linear-gradient(rgba(0,168,132,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,168,132,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        {/* Floating orbs */}
        <div style={{
          position: 'absolute', top: '20%', left: '10%',
          width: '300px', height: '300px',
          background: 'rgba(0,168,132,0.04)',
          borderRadius: '50%', filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', right: '10%',
          width: '250px', height: '250px',
          background: 'rgba(0,230,118,0.04)',
          borderRadius: '50%', filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite reverse'
        }} />
      </div>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Top Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(0,168,132,0.1)',
          border: '1px solid rgba(0,168,132,0.2)',
          borderRadius: '50px',
          padding: '6px 16px',
          marginBottom: '32px',
          fontSize: '13px',
          color: '#00E676',
          fontWeight: '700'
        }}>
          <span style={{
            width: '8px', height: '8px',
            background: '#00E676',
            borderRadius: '50%',
            display: 'inline-block',
            animation: 'pulse 2s infinite'
          }} />
          🔥 #1 WhatsApp Web Manager for PC · 10,000+ Downloads
        </div>

        {/* Main Heading - SEO CRITICAL */}
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: '900',
          lineHeight: 1.1,
          color: '#fff',
          marginBottom: '16px',
          letterSpacing: '-2px'
        }}>
          WhatsApp Web{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00A884, #00E676)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'block'
          }}>
            {displayed}
            <span style={{
              borderRight: '3px solid #00E676',
              marginLeft: '2px',
              animation: 'blink 1s infinite'
            }} />
          </span>
        </h1>

        {/* Sub heading */}
        <h2 style={{
          fontSize: 'clamp(16px, 2.5vw, 22px)',
          color: '#9CA3AF',
          fontWeight: '400',
          lineHeight: 1.7,
          marginBottom: '48px',
          maxWidth: '680px',
          margin: '0 auto 48px'
        }}>
          The most powerful <strong style={{ color: '#fff' }}>WhatsApp Web</strong> desktop app.
          Manage <strong style={{ color: '#00E676' }}>30+ WhatsApp accounts</strong> simultaneously
          in one beautiful window. Free for Windows & Mac.
        </h2>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '64px'
        }}>
          <a
            href="https://github.com/your-repo/releases/download/v1.0.0/WhatsWebMulti-Setup-1.0.0.exe"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '18px 40px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #00A884, #00E676)',
              color: '#000',
              fontWeight: '900',
              fontSize: '17px',
              textDecoration: 'none',
              boxShadow: '0 16px 48px rgba(0,168,132,0.4)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 24px 64px rgba(0,168,132,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,168,132,0.4)'
            }}
          >
            <span style={{ fontSize: '22px' }}>⬇️</span>
            Download Free for Windows
            <span style={{
              background: 'rgba(0,0,0,0.2)',
              padding: '2px 8px',
              borderRadius: '6px',
              fontSize: '12px'
            }}>v1.0.0</span>
          </a>

          <Link
            to="/pricing"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 32px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              fontWeight: '700',
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            💰 View Plans
          </Link>
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '64px'
        }}>
          {[
            { icon: '✅', text: 'No Account Required' },
            { icon: '🔒', text: '100% Safe & Secure' },
            { icon: '🆓', text: 'Free Plan Available' },
            { icon: '⚡', text: 'Instant Setup' },
          ].map((badge, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#9CA3AF',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <span>{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>

        {/* App Preview - Fake Screenshot */}
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {/* Browser chrome */}
          <div style={{
            background: '#1A2535',
            borderRadius: '16px 16px 0 0',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid rgba(255,255,255,0.08)',
            borderBottom: 'none'
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
                <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{
              flex: 1, background: '#0F1520',
              borderRadius: '6px', padding: '4px 12px',
              fontSize: '12px', color: '#6B7280',
              maxWidth: '300px', margin: '0 auto'
            }}>
              🔒 whatswebmulti.com
            </div>
          </div>

          {/* App window */}
          <div style={{
            background: 'linear-gradient(135deg, #0F1520, #131C26)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderTop: 'none',
            borderRadius: '0 0 16px 16px',
            padding: '0',
            overflow: 'hidden',
            minHeight: '400px',
            display: 'flex',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,168,132,0.1)',
          }}>
            {/* Sidebar */}
            <div style={{
              width: '200px',
              background: '#0A0E17',
              borderRight: '1px solid #1A2535',
              padding: '16px',
              flexShrink: 0
            }}>
              <div style={{
                fontSize: '11px', color: '#00A884',
                fontWeight: '700', marginBottom: '12px',
                textTransform: 'uppercase', letterSpacing: '1px'
              }}>
                WhatsApp Accounts
              </div>
              {[
                { name: 'Business Account', color: '#00E676', active: true },
                { name: 'Personal Account', color: '#3D8EFF', active: false },
                { name: 'Marketing Team',   color: '#A855F7', active: false },
                { name: 'Support Team',     color: '#FFB800', active: false },
                { name: 'Sales Account',    color: '#FF6B35', active: false },
              ].map((acc, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px',
                  borderRadius: '10px',
                  marginBottom: '4px',
                  background: acc.active ? 'rgba(0,168,132,0.1)' : 'transparent',
                  border: acc.active ? '1px solid rgba(0,168,132,0.2)' : '1px solid transparent',
                }}>
                  <div style={{
                    width: '32px', height: '32px',
                    borderRadius: '50%',
                    background: `${acc.color}22`,
                    border: `2px solid ${acc.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', fontWeight: '900', color: acc.color
                  }}>
                    {acc.name[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#fff', fontWeight: '600' }}>{acc.name.split(' ')[0]}</div>
                    <div style={{ fontSize: '10px', color: '#6B7280' }}>● Online</div>
                  </div>
                </div>
              ))}
              <div style={{
                marginTop: '12px',
                padding: '10px',
                borderRadius: '10px',
                border: '1px dashed rgba(0,168,132,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                color: '#00A884',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                + Add Account
              </div>
            </div>

            {/* Main WhatsApp Web area */}
            <div style={{ flex: 1, position: 'relative' }}>
              {/* Fake WhatsApp Web UI */}
              <div style={{
                background: '#111B21',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Top bar */}
                <div style={{
                  padding: '12px 20px',
                  background: '#202C33',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderBottom: '1px solid #2A3942'
                }}>
                  <div style={{
                    width: '40px', height: '40px',
                    background: '#00A884',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '900', color: '#000'
                  }}>B</div>
                  <div>
                    <div style={{ color: '#E9EDEF', fontSize: '15px', fontWeight: '600' }}>Business Account</div>
                    <div style={{ color: '#00A884', fontSize: '12px' }}>● WhatsApp Web - Active</div>
                  </div>
                </div>

                {/* Chat area */}
                <div style={{ flex: 1, padding: '20px', overflow: 'hidden' }}>
                  {[
                    { text: 'Hello! Your order is confirmed ✅', time: '10:30', sent: false },
                    { text: 'Thank you! When will it arrive?', time: '10:31', sent: true },
                    { text: 'Expected delivery: Tomorrow by 5 PM 🚚', time: '10:32', sent: false },
                    { text: 'Great! Thanks for the quick response', time: '10:33', sent: true },
                  ].map((msg, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      justifyContent: msg.sent ? 'flex-end' : 'flex-start',
                      marginBottom: '8px'
                    }}>
                      <div style={{
                        background: msg.sent ? '#005C4B' : '#202C33',
                        color: '#E9EDEF',
                        padding: '8px 12px',
                        borderRadius: msg.sent ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                        maxWidth: '70%',
                        fontSize: '13px',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.3)'
                      }}>
                        {msg.text}
                        <span style={{ fontSize: '10px', color: '#8899A6', marginLeft: '8px' }}>
                          {msg.time} {msg.sent && '✓✓'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div style={{
                  padding: '12px 16px',
                  background: '#202C33',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderTop: '1px solid #2A3942'
                }}>
                  <div style={{
                    flex: 1, background: '#2A3942',
                    borderRadius: '8px', padding: '10px 16px',
                    color: '#8899A6', fontSize: '14px'
                  }}>
                    Type a message...
                  </div>
                  <div style={{
                    width: '36px', height: '36px',
                    background: '#00A884', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer'
                  }}>➤</div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect below */}
          <div style={{
            position: 'absolute',
            bottom: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '60px',
            background: 'rgba(0,168,132,0.2)',
            filter: 'blur(30px)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  )
}