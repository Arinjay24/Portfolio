import React, { useState } from 'react'

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="backdrop-blur-sm sticky top-0 z-30 bg-white/60 border-b border-transparent">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary name flex items-center justify-center text-white font-bold">AS</div>
          <div className="font-semibold">Arinjay Shukla</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-slate-600">
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#experience" className="hover:text-slate-900">Experience</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">Hire Me</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-6 py-4 space-y-4">
            <nav className="flex flex-col gap-4 text-sm text-slate-600">
              <a href="#projects" className="hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#experience" className="hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#contact" className="hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
            <div className="pt-2">
              <a href="#contact" className="btn-primary block text-center" onClick={() => setIsMenuOpen(false)}>Hire Me</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
