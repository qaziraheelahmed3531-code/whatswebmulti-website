import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'

export default function Success() {
  const [params]  = useSearchParams()
  const [data,    setData]    = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const sessionId = params.get('session_id')
    if (sessionId) {
      axios.get(`/api/payment/verify-session?session_id=${sessionId}`)
        .then(res => {
          if (res.data.success) setData(res.data)
        })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Payment Successful - WhatsWebMulti</title>
      </Helmet>
      <div style={{
        minHeight: '100vh',
        background: '#0A0E17',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}>
        <div style={{
          maxWidth: '520px',
          width: '100%',
          background: 'rgba(15,21,32,0.9)',
          border: '1px solid rgba(0,168,132,0.2)',
          borderRadius: '24px',
          padding: '48px 40px',
          textAlign: 'center'
        }}>
          {loading ? (
            <div>
              <div style={{
                width: '48px', height: '48px',
                border: '3px solid rgba(0,168,132,0.2)',
                borderTop: '3px solid #00A884',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
                margin: '0 auto 20px'
              }} />
              <p style={{ color: '#9CA3AF' }}>Verifying payment...</p>
            </div>
          ) : data ? (
            <>
              <div style={{ fontSize: '72px', marginBottom: '24px' }}>🎉</div>
              <h1 style={{
                fontSize: '32px', fontWeight: '900',
                color: '#00E676', marginBottom: '12px'
              }}>
                Payment Successful!
              </h1>
              <p style={{ color: '#9CA3AF', fontSize: '16px', marginBottom: '32px', lineHeight: 1.7 }}>
                Your <strong style={{ color: '#fff' }}>{data.plan?.toUpperCase()}</strong> license key
                has been sent to <strong style={{ color: '#00A884' }}>{data.userEmail}</strong>.
                Check your email inbox!
              </p>

              {data.licenseKey && (
                <div style={{
                  background: 'rgba(0,168,132,0.08)',
                  border: '1px solid rgba(0,168,132,0.2)',
                  borderRadius: '16px',
                  padding: '24px',
                  marginBottom: '32px'
                }}>
                  <div style={{ color: '#9CA3AF', fontSize: '12px', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Your License Key
                  </div>
                  <div style={{
                    color: '#00E676',
                    fontFamily: 'monospace',
                    fontSize: '20px',
                    fontWeight: '900',
                    letterSpacing: '2px',
                    wordBreak: 'break-all'
                  }}>
                    {data.licenseKey}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="https://github.com/your-repo/releases/download/v1.0.0/WhatsWebMulti-Setup-1.0.0.exe"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '10px', padding: '16px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #00A884, #00E676)',
                    color: '#000', fontWeight: '900',
                    fontSize: '16px', textDecoration: 'none'
                  }}
                >
                  ⬇️ Download WhatsWebMulti Now
                </a>
                <Link
                  to="/"
                  style={{
                    display: 'block', padding: '14px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#9CA3AF', fontWeight: '600',
                    fontSize: '15px', textDecoration: 'none'
                  }}
                >
                  Back to Home
                </Link>
              </div>
            </>
          ) : (
            <>
              <div style={{ fontSize: '72px', marginBottom: '24px' }}>✅</div>
              <h1 style={{ fontSize: '28px', fontWeight: '900', color: '#fff', marginBottom: '12px' }}>
                Thank You!
              </h1>
              <p style={{ color: '#9CA3AF', fontSize: '16px', marginBottom: '24px' }}>
                If you made a payment, check your email for the license key.
              </p>
              <Link to="/" style={{
                display: 'block', padding: '14px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #00A884, #00E676)',
                color: '#000', fontWeight: '800',
                textDecoration: 'none'
              }}>
                Go to Home
              </Link>
            </>
          )}
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  )
}