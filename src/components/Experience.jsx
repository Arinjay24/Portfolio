import React, { useEffect } from 'react'

const timeline = [
  {
    company: 'JPMorgan Chase & Co, Bengaluru, India',
    title: 'Software Developer 2',
    period: 'Nov 2025 – Present',
    description: 'Onboarding as Software Developer 2 and contributing to core platform and reliability improvements across backend services and platform tooling to boost performance and observability.'
  },
  {
    company: 'Oracle, Bengaluru, India',
    title: 'Associate Software Developer',
    period: 'Aug 2023 – Oct 2025',
    description: 'Implemented batch-processing with parallel API calls and Gzip compression to reduce payloads and speed execution; processed and analyzed 1M+ Diameter packets daily to find anomalies and built dashboards to reduce latency bottlenecks; developed time-series forecasting models to improve server scaling decisions.'
  },
  {
    company: 'Oracle, Bengaluru, India',
    title: 'Project Intern',
    period: 'Jan 2023 – Jul 2023',
    description: 'Built a terminal-based UI suite to manage upgrade workflows across 100+ systems, reducing manual effort significantly, and implemented structured logging for upgrade processes to increase traceability and speed resolution.'
  },
  {
    company: 'Goldman Sachs, Hyderabad, India',
    title: 'Summer Analyst',
    period: 'Jun 2022 – Jul 2022',
    description: 'Developed a real-time analytics dashboard for 15+ microservices, aggregating metrics to enforce code quality and increase throughput.'
  }
]

export default function Experience(){
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.timeline-item'))
    if (!els.length) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0')
          e.target.classList.remove('opacity-0', 'translate-y-6')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  
  return (
    <section id="experience" className="mt-12">
      <h2 className="text-xl font-semibold mb-6">Experience</h2>
      <div className="relative max-w-4xl mx-auto px-4">
        {/* vertical line: left on small screens, centered on md+ */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 md:hidden"></div>
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2"></div>

        <div className="grid md:grid-cols-9 gap-y-10 gap-x-6 items-start">
          {timeline.map((t, i) => (
            <React.Fragment key={`${t.company}-${i}`}>
              {/* left column: show card for even indices */}
              <div className="md:col-span-4 md:flex md:items-start md:justify-end relative">
                {/* mobile dot aligned with left line */}
                <div className="md:hidden absolute -left-6 top-4 w-3 h-3 rounded-full bg-white border border-slate-200"></div>
                {i % 2 === 0 && (
                  <div className="card timeline-item opacity-0 translate-y-6 md:translate-y-0 transition-opacity transition-transform duration-500 ease-out w-full rounded-lg shadow-sm">
                    <div>
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary name font-semibold">{t.title}</div>
                      <div className="text-sm text-slate-600 mt-1">{t.company}</div>
                      <div className="text-xs text-slate-400 mt-1">{t.period}</div>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{t.description}</p>
                  </div>
                )}
              </div>

              {/* center column: connector + dot */}
              <div className="md:col-span-1 hidden md:flex justify-center relative">
                <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center -mt-1">●</div>
              </div>

              {/* right column: show card for odd indices */}
              <div className="md:col-span-4 md:flex md:items-start md:justify-start relative">
                {/* mobile dot aligned with left line (for right-side items we still show dot on mobile) */}
                <div className="md:hidden absolute -left-6 top-4 w-3 h-3 rounded-full bg-white border border-slate-200"></div>
                {i % 2 === 1 && (
                  <div className="card timeline-item opacity-0 translate-y-6 md:translate-y-0 transition-opacity transition-transform duration-500 ease-out w-full rounded-lg shadow-sm">
                    <div>
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary name font-semibold">{t.title}</div>
                      <div className="text-sm text-slate-600 mt-1">{t.company}</div>
                      <div className="text-xs text-slate-400 mt-1">{t.period}</div>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{t.description}</p>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      
    </section>
  )
}
