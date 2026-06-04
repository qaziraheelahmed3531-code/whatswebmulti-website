import React, { useState } from 'react'

const FAQS = [
  {
    q: 'What is WhatsApp Web and how does WhatsWebMulti work?',
    a: 'WhatsApp Web is the browser-based version of WhatsApp that lets you use WhatsApp on your PC. WhatsWebMulti is a desktop app that runs multiple WhatsApp Web instances simultaneously, so you can manage 2 to 30 WhatsApp accounts in one window without opening multiple browsers.'
  },
  {
    q: 'Can I use multiple WhatsApp Web accounts at the same time?',
    a: 'Yes! That is exactly what WhatsWebMulti does. Unlike the official WhatsApp Web which only supports one account, WhatsWebMulti lets you run 2 (free), 5 (basic), 10 (pro), or 30 (enterprise) WhatsApp Web accounts simultaneously from one desktop application.'
  },
  {
    q: 'Is WhatsWebMulti safe? Will my WhatsApp account get banned?',
    a: 'Yes, WhatsWebMulti is completely safe. It uses the official WhatsApp Web interface - the same technology as web.whatsapp.com. Your WhatsApp accounts will not get banned because the app behaves exactly like a regular WhatsApp Web browser session.'
  },
  {
    q: 'Does WhatsWebMulti work on Windows and Mac?',
    a: 'Yes! WhatsWebMulti works on Windows 10, Windows 11 (current release), and macOS (coming soon). The Windows version (.exe) is available for immediate download. Mac version (.dmg) will be released soon.'
  },
  {
    q: 'What is the difference between Free and paid plans?',
    a: 'The Free plan gives you 2 WhatsApp Web accounts. Basic plan ($3 lifetime) gives 5 accounts. Pro plan ($5 lifetime) gives 10 accounts with priority support. Enterprise ($10 lifetime) gives 30 accounts with 24/7 WhatsApp support. All plans are one-time payments - no monthly subscription!'
  },
  {
    q: 'How do I activate WhatsApp Web in WhatsWebMulti?',
    a: 'Download and install WhatsWebMulti. Open the app and you will see WhatsApp Web QR code. Scan it with your phone (just like web.whatsapp.com). Your WhatsApp Web account is ready! To add more accounts, click "Add Account" and scan another QR code.'
  },
  {
    q: 'Do I get a refund if it does not work?',
    a: 'Yes, we offer full refund within 7 days if WhatsWebMulti does not work on your device. Contact us on WhatsApp support and we will resolve your issue or refund immediately.'
  },
  {
    q: 'Does WhatsApp Web work without keeping browser open?',
    a: 'Yes! WhatsWebMulti is a dedicated desktop app, so WhatsApp Web works without any browser. It runs in the background and sends notifications even when minimized. Much better than keeping WhatsApp Web tabs open in your browser.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{
      padding: '100px 24px',
      background: 'rgba(0,168,132,0.02)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0,168,132,0.1)',
            border: '1px solid rgba(0,168,132,0.2)',
            borderRadius: '50px', padding: '6px 16px',
            marginBottom: '20px', fontSize: '13px',
            color: '#00E676', fontWeight: '700'
          }}>
            ❓ FAQ
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: '900', color: '#fff',
            lineHeight: 1.2, marginBottom: '16px'
          }}>
            WhatsApp Web Questions Answered
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '18px' }}>
            Everything you need to know about WhatsWebMulti
          </p>
        </div>

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        })}} />

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                background: open === i ? 'rgba(0,168,132,0.06)' : 'rgba(15,21,32,0.8)',
                border: open === i ? '1px solid rgba(0,168,132,0.2)' : '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s'
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  textAlign: 'left'
                }}
              >
                <h3 style={{
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '16px',
                  lineHeight: 1.4,
                  margin: 0
                }}>
                  {faq.q}
                </h3>
                <span style={{
                  color: '#00A884',
                  fontSize: '20px',
                  flexShrink: 0,
                  transition: 'transform 0.3s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)'
                }}>
                  +
                </span>
              </button>

              {open === i && (
                <div style={{ padding: '0 24px 20px' }}>
                  <p style={{
                    color: '#9CA3AF',
                    fontSize: '15px',
                    lineHeight: 1.8,
                    margin: 0
                  }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}