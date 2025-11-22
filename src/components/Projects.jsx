import React from 'react'
import hrs from '../assets/hrs.png'
import aps from '../assets/aps.png'
const projects = [
  {
    name: 'Automated Parking System',
    desc: 'Web-based application for real-time tracking of parking spots; integrated Arduino sensors for automated updates, increasing accuracy and reducing congestion.',
    tech: ['JavaScript', 'Arduino', 'Websockets'],
    link: 'https://github.com/Prachiagarwal5678/mlsc_hack',
    image: aps
  },
  {
    name: 'Hotel Review System',
    desc: 'NLP-driven platform to generate sentiment-based star ratings and display feedback summaries via an interactive UI.',
    tech: ['Python', 'NLP', 'React'],
    link: 'https://github.com/Arinjay24/SE-Project',
    image: hrs
  }
]

export default function Projects(){
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => (
          <a key={p.name} href={p.link} className="card block h-full transform transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none">
            <div className="flex flex-col h-full">
              <div className="h-40 bg-gradient-to-br from-indigo-50 to-white rounded-xl mb-4 flex items-center justify-center overflow-hidden flex-none">
                <div className="text-slate-400 w-full h-full">
                  <img src={p.image} alt={`${p.name} screenshot`} className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map(t => <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded">{t}</span>)}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
