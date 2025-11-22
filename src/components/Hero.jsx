import React from 'react'

export default function Hero(){
  return (
    <section className="relative overflow-hidden mt-8">
      <div className="absolute -right-40 -top-24 w-80 h-80 rounded-full gradient-blob opacity-90 animate-float"></div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary name">Arinjay Shukla</span>, Software Developer 2 @ JPMC</h1>
          <p className="mt-4 text-slate-600 text-lg">Building scalable systems & elegant front-end experiences, focusing on performance, accessibility, and delightful UX.</p>
          <div className="mt-6 flex gap-4">
            <a href="#experience" className="btn-primary">Explore my journey</a>
            <a href="/Arinjay_resume_latest.pdf" className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:shadow" target="_blank" rel="noreferrer">Download Resume</a>
          </div>
          <div className="mt-6 flex gap-6 text-sm text-slate-600">
            <div><strong className="text-slate-900">2+</strong> yrs experience</div>
            <div><strong className="text-slate-900">Passion</strong> Design-driven code & AI</div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-white shadow-soft">
            <img src="/src/assets/mypic.jpeg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
