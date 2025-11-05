import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Circuit Viz',
    description: 'Real-time WebGL shader playground for electric circuit aesthetics.',
    year: 2024,
    tags: ['WebGL', 'Shaders', 'Three.js'],
  },
  {
    title: 'Robotic Arm Controller',
    description: 'Inverse kinematics and PID control system with a web UI.',
    year: 2023,
    tags: ['Control', 'IK', 'TypeScript'],
  },
  {
    title: 'Edge AI Sensor Hub',
    description: 'Low-power embedded ML pipelines deployed to edge sensors.',
    year: 2023,
    tags: ['TinyML', 'Embedded', 'Python'],
  },
]

function Card({ children }) {
  return (
    <div className="card-glass">
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="relative py-24 bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h3 className="text-3xl md:text-4xl font-semibold text-white">Featured Projects</h3>
          <a href="#" className="text-white/90 hover:text-white underline decoration-white/40 underline-offset-4">View all</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-colors shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-white/60">{p.year}</span>
                <div className="flex gap-2">
                  {p.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-full border border-white/10 text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h4 className="text-white text-xl font-semibold">{p.title}</h4>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{p.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
