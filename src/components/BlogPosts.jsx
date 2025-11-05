import { motion } from 'framer-motion'

const posts = [
  {
    title: 'Designing a Particle Field at 60fps',
    date: '2024-08-12',
    summary: 'Balancing aesthetics with performance using instancing and shaders.',
  },
  {
    title: 'From Circuits to Shaders',
    date: '2024-05-03',
    summary: 'How electrical engineering intuition translates into GLSL art.',
  },
  {
    title: 'Framer Motion Tricks for Delight',
    date: '2023-12-18',
    summary: 'Micro-interactions and springs that make UIs feel alive.',
  },
]

function formatDate(d) {
  return new Date(d).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

export default function BlogPosts() {
  return (
    <section id="blog" className="relative py-24 bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h3 className="text-3xl md:text-4xl font-semibold text-white">Latest Posts</h3>
          <a href="#" className="text-white/90 hover:text-white underline decoration-white/40 underline-offset-4">View all posts</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-colors shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <time className="text-xs text-white/60">{formatDate(p.date)}</time>
              <h4 className="text-white text-lg font-semibold mt-2">{p.title}</h4>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{p.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
