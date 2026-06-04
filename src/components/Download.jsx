import React from 'react'

export default function DownloadSection() {
  return (
    <section id="download" style={{
      padding: '100px 24px',
      background: 'rgba(0,168,132,0.03)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* Header */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(0,168,132,0.1)',
          border: '1px solid rgba(0,168,132,0.2)',
          borderRadius: '50px', padding: '6px 16px',
          marginBottom: '20px', fontSize: '13px',
          color: '#00E676', fontWeight: '700'
        }}>
          ⬇️ Free Download
        </div>

        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 52px)',
          fontWeight: '900', color: '#fff',
          lineHeight: 1.2, marginBottom: '16px'
        }}>
          Download WhatsApp Web App
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #00A884, #00E676)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            For Windows & Mac
          </span>
        </h2>

        <p style={{
          color: '#9CA3AF', fontSize: '18px',
          marginBottom: '60px', lineHeight: 1.7
        }}>
          The best WhatsApp Web desktop app. Free to download,
          free to use with 2 accounts. Upgrade anytime for more.
        </p>

        {/* Download Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {/* Windows */}
          <div style={{
            background: 'rgba(15,21,32,0.8)',
            border: '1px solid rgba(61,142,255,0.2)',
            borderRadius: '24px',
            padding: '40px 32px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🪟</div>
            <h3 style={{
              fontSize: '24px', fontWeight: '900',
              color: '#fff', marginBottom: '8px'
            }}>
              Windows
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '8px' }}>
              Windows 10 & 11 (64-bit)
            </p>
            <div style={{
              display: 'flex', gap: '8px', justifyContent: 'center',
              marginBottom: '24px', flexWrap: 'wrap'
            }}>
              {['v1.0.0', '~65 MB', 'x64'].map((tag, i) => (
                <span key={i} style={{
                  background: 'rgba(61,142,255,0.1)',
                  border: '1px solid rgba(61,142,255,0.2)',
                  color: '#3D8EFF',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '700'
                }}>{tag}</span>
              ))}
            </div>
            <a
              href="https://github.com/your-repo/releases/download/v1.0.0/WhatsWebMulti-Setup-1.0.0.exe"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '16px 32px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #3D8EFF, #60AAFF)',
                color: '#000',
                fontWeight: '900',
                fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(61,142,255,0.3)',
                transition: 'all 0.3s'
              }}
            >
              ⬇️ Download .exe
            </a>
            <p style={{ color: '#6B7280', fontSize: '12px', marginTop: '12px' }}>
              ✅ VirusTotal scanned · No malware
            </p>
          </div>

          {/* Mac */}
          <div style={{
            background: 'rgba(15,21,32,0.8)',
            border: '1px solid rgba(168,85,247,0.2)',
            borderRadius: '24px',
            padding: '40px 32px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🍎</div>
            <h3 style={{
              fontSize: '24px', fontWeight: '900',
              color: '#fff', marginBottom: '8px'
            }}>
              macOS
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '8px' }}>
              macOS 11+ (Intel & Apple Silicon)
            </p>
            <div style={{
              display: 'flex', gap: '8px', justifyContent: 'center',
              marginBottom: '24px', flexWrap: 'wrap'
            }}>
              {['v1.0.0', '~72 MB', 'Universal'].map((tag, i) => (
                <span key={i} style={{
                  background: 'rgba(168,85,247,0.1)',
                  border: '1px solid rgba(168,85,247,0.2)',
                  color: '#A855F7',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '700'
                }}>{tag}</span>
              ))}
            </div>
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '16px 32px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #A855F7, #C084FC)',
                color: '#fff',
                fontWeight: '900',
                fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(168,85,247,0.3)',
                transition: 'all 0.3s'
              }}
            >
              ⬇️ Download .dmg
            </a>
            <p style={{ color: '#6B7280', fontSize: '12px', marginTop: '12px' }}>
              🔜 Coming Soon - Join waitlist
            </p>
          </div>
        </div>

        {/* System Requirements */}
        <div style={{
          background: 'rgba(15,21,32,0.5)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '28px',
          textAlign: 'left'
        }}>
          <h4 style={{ color: '#fff', fontWeight: '700', marginBottom: '16px', textAlign: 'center' }}>
            💻 System Requirements
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {[
              { label: 'OS',  value: 'Windows 10/11 or macOS 11+' },
              { label: 'RAM', value: '4 GB minimum (8 GB recommended)' },
              { label: 'CPU', value: 'Any modern processor (2015+)' },
              { label: 'Net', value: 'Internet connection required' },
            ].map((req, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#00A884', fontWeight: '700', minWidth: '35px', fontSize: '13px' }}>
                  {req.label}:
                </span>
                <span style={{ color: '#9CA3AF', fontSize: '13px' }}>{req.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}