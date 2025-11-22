import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-16 py-8 border-t border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-300">© {new Date().getFullYear()} Arinjay — Crafted with curiosity & code 💙</div>
    </footer>
  )
}
