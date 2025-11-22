import React from 'react'
import me from "../assets/Me.jpg";

export default function About(){
  return (
    <section id="about" className="mt-12">
      <div className="card">
        <div className="md:flex items-center gap-8">
          <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
            <img src={me} alt="profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">About Me</h3>
              <p className="mt-3 text-slate-600">I build scalable systems and elegant front-end experiences. My recent work at Oracle focused on high-throughput data processing, time-series forecasting for traffic/load prediction, and resilient upgrade tooling. I enjoy improving performance, observability, and developer productivity.</p>
              <div className="mt-4 flex gap-6 text-sm text-slate-700">
                <div><strong>Location:</strong> Bengaluru, India</div>
                <div><strong>Education:</strong> B.E. Computer Engineering, Thapar Institute of Engineering & Technology</div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
