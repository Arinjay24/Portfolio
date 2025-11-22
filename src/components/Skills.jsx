import React from 'react'

const skillGroups = [
  { title: 'Languages', items: ['C++', 'C', 'Java', 'Python', 'Perl', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Frameworks & DB', items: ['React', 'Node.js', 'Express', 'FastAPI', 'MongoDB', 'Postgres'] },
  { title: 'Cloud & Infra', items: ['Docker', 'Kubernetes', 'Oracle Linux', 'GCP', 'AWS'] },
  { title: 'Tools & ML', items: ['Git', 'Jupyter', 'TensorFlow/PyTorch', 'Postman', 'CI/CD'] }
]

export default function Skills(){
  return (
    <section id="skills" className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((g)=> (
          <div key={g.title} className="card">
            <h4 className="font-semibold mb-3">{g.title}</h4>
            <div className="flex flex-wrap gap-2">
              {g.items.map(s => (
                <span key={s} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
