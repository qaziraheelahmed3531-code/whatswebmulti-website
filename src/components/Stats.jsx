import React, { useState, useEffect, useRef } from 'react'

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let startTime = null
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * end))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const STATS = [
  { value: 10000, suffix: '+', label: 'Downloads',       icon: '⬇️', color: '#00E676' },
  { value: 50,    suffix: '+', label: 'Countries',        icon: '🌍', color: '#3D8EFF' },
  { value: 4.9,   suffix: '/5',label: 'User Rating',      icon: '⭐', color: '#FFB800', fixed: 1 },
  { value: 30,    suffix: '',  label: 'Max WA Accounts',  icon: '💬', color: '#A855F7' },
]

export default function Stats() {
  return (
    <section style={{
      padding: '60px 24px',
      background: 'rgba(0,168,132,0.03)',
      borderTop: '1px solid rgba(0,168,132,0.1)',
      borderBottom: '1px solid rgba(0,168,132,0.1)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '32px',
          textAlign: 'center'
        }}>
          {STATS.map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{
                fontSize: '44px',
                fontWeight: '900',
                color: stat.color,
                lineHeight: 1,
                marginBottom: '8px'
              }}>
                {stat.fixed
                  ? stat.value.toFixed(stat.fixed) + stat.suffix
                  : <><CountUp end={stat.value} />{stat.suffix}</>
                }
              </div>
              <div style={{ color: '#9CA3AF', fontSize: '15px', fontWeight: '500' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}