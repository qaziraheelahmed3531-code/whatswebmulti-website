import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const PLANS = [
  {
    name:     'Free',
    price:    0,
    accounts: 2,
    color:    '#8899A6',
    features: [
      '2 WhatsApp Web Accounts',
      'Basic Notifications',
      'Windows & Mac',
      'Community Support',
    ],
    cta:    'Download Free',
    action: 'download',
    popular: false,
  },
  {
    name:     'Basic',
    price:    3,
    accounts: 5,
    color:    '#3D8EFF',
    features: [
      '5 WhatsApp Web Accounts',
      'Desktop Notifications',
      'Windows & Mac',
      'Email Support',
      'Lifetime License',
    ],
    cta:    'Get Basic',
    action: 'buy',
    plan:   'basic',
    popular: false,
  },
  {
    name:     'Pro',
    price:    5,
    accounts: 10,
    color:    '#00E676',
    features: [
      '10 WhatsApp Web Accounts',
      'Priority Notifications',
      'Windows & Mac',
      'Priority Support',
      'Lifetime License',
      'Auto Updates',
    ],
    cta:    '🔥 Get Pro',
    action: 'buy',
    plan:   'pro',
    popular: true,
  },
  {
    name:     'Enterprise',
    price:    10,
    accounts: 30,
    color:    '#A855F7',
    features: [
      '30 WhatsApp Web Accounts',
      'All Pro Features',
      'Windows & Mac',
      '24/7 WhatsApp Support',
      'Lifetime License',
      'Custom Setup Help',
    ],
    cta:    'Get Enterprise',
    action: 'buy',
    plan:   'enterprise',
    popular: false,
  },
]

export default function Pricing() {
  const [loading, setLoading] = useState(null)
  const [form,    setForm]    = useState({ name: '', email: '' })
  const [showForm, setShowForm] = useState(null)

  async function handleBuy(plan) {
    if (!form.name || !form.email) {
      setShowForm(plan.plan)
      return
    }
    setLoading(plan.plan)
    try {
      const { data } = await axios.post('/api/payment/create-checkout', {
        plan:      plan.plan,
        userName:  form.name,
        userEmail: form.email,
      })
      if (data.success) {
        window.location.href = data.checkoutUrl
      } else {
        toast.error(data.message)
      }
    } catch {
      toast.error('Server error. Please try again.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <section id="pricing" style={{ padding: '100px 24px' }}>
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
            💰 Simple Pricing
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: '900', color: '#fff',
            lineHeight: 1.2, marginBottom: '16px'
          }}>
            Choose Your WhatsApp Web Plan
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '18px' }}>
            One-time payment. Lifetime license. No subscription fees.
          </p>
        </div>

        {/* Plans Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          alignItems: 'start'
        }}>
          {PLANS.map((plan, i) => (
            <div
              key={i}
              style={{
                background: plan.popular
                  ? `linear-gradient(135deg, rgba(0,168,132,0.1), rgba(0,230,118,0.05))`
                  : 'rgba(15,21,32,0.8)',
                border: plan.popular
                  ? '2px solid rgba(0,168,132,0.4)'
                  : '1px solid rgba(255,255,255,0.06)',
                borderRadius: '24px',
                padding: '32px',
                position: 'relative',
                transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                boxShadow: plan.popular ? '0 24px 64px rgba(0,168,132,0.2)' : 'none',
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #00A884, #00E676)',
                  color: '#000',
                  padding: '4px 20px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '900',
                  whiteSpace: 'nowrap'
                }}>
                  🔥 MOST POPULAR
                </div>
              )}

              {/* Plan name */}
              <div style={{
                fontSize: '14px', fontWeight: '700',
                color: plan.color,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px'
              }}>
                {plan.name}
              </div>

              {/* Price */}
              <div style={{ marginBottom: '8px' }}>
                <span style={{
                  fontSize: '52px', fontWeight: '900',
                  color: '#fff', lineHeight: 1
                }}>
                  ${plan.price}
                </span>
                {plan.price > 0 && (
                  <span style={{ color: '#9CA3AF', fontSize: '14px', marginLeft: '4px' }}>
                    /lifetime
                  </span>
                )}
              </div>

              {/* Accounts */}
              <div style={{
                fontSize: '14px', color: plan.color,
                fontWeight: '700', marginBottom: '24px'
              }}>
                {plan.accounts} WhatsApp Web Accounts
              </div>

              {/* Features */}
              <div style={{ marginBottom: '32px' }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{
                    display: 'flex', alignItems: 'center',
                    gap: '10px', marginBottom: '10px',
                    fontSize: '14px', color: '#D1D5DB'
                  }}>
                    <span style={{ color: plan.color, fontWeight: '900', fontSize: '16px' }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>

              {/* Form */}
              {showForm === plan.plan && (
                <div style={{ marginBottom: '16px' }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    style={{
                      width: '100%', padding: '10px 14px',
                      background: '#131C26',
                      border: '1px solid #1A2535',
                      borderRadius: '10px',
                      color: '#fff', fontSize: '14px',
                      outline: 'none', marginBottom: '8px',
                      boxSizing: 'border-box'
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    style={{
                      width: '100%', padding: '10px 14px',
                      background: '#131C26',
                      border: '1px solid #1A2535',
                      borderRadius: '10px',
                      color: '#fff', fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              )}

              {/* CTA */}
              {plan.action === 'download' ? (
                <a
                  href="https://github.com/your-repo/releases/download/v1.0.0/WhatsWebMulti-Setup-1.0.0.exe"
                  style={{
                    display: 'block', textAlign: 'center',
                    padding: '14px',
                    borderRadius: '12px',
                    background: 'rgba(136,153,166,0.15)',
                    border: '1px solid rgba(136,153,166,0.2)',
                    color: '#8899A6',
                    fontWeight: '700', fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  ⬇️ {plan.cta}
                </a>
              ) : (
                <button
                  onClick={() => handleBuy(plan)}
                  disabled={loading === plan.plan}
                  style={{
                    width: '100%', padding: '14px',
                    borderRadius: '12px',
                    background: plan.popular
                      ? 'linear-gradient(135deg, #00A884, #00E676)'
                      : `${plan.color}22`,
                    border: plan.popular ? 'none' : `1px solid ${plan.color}44`,
                    color: plan.popular ? '#000' : plan.color,
                    fontWeight: '800', fontSize: '15px',
                    cursor: loading === plan.plan ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    opacity: loading === plan.plan ? 0.7 : 1
                  }}
                >
                  {loading === plan.plan ? '⏳ Processing...' : plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>
            🔒 Secure payment via Stripe · 💳 All cards accepted ·
            📧 License key delivered instantly to your email
          </p>
        </div>
      </div>
    </section>
  )
}