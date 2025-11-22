import React from 'react'

export default function Header(){
  return (
    <header className="backdrop-blur-sm sticky top-0 z-30 bg-white/60 border-b border-transparent">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary name flex items-center justify-center text-white font-bold">AS</div>
          <div className="font-semibold">Arinjay Shukla</div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#experience" className="hover:text-slate-900">Experience</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">Hire Me</a>
        </div>
      </div>
    </header>
  )
}
