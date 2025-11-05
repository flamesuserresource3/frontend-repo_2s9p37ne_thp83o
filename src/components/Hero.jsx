import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Zap, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* gradient & vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-10 border border-white/10 bg-white/5 backdrop-blur-md"
              style={{ boxShadow: '0 0 30px rgba(138, 180, 248, 0.2)' }}
            >
              <Zap className="w-6 h-6 text-white" />
            </div>

            <p className="text-lg md:text-xl text-white/70 mb-4">Hey!</p>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2 drop-shadow-[0_0_30px_rgba(138,180,248,0.3)]">
              I&apos;m Made
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-2">
              Electrical Engineering
            </h2>
            <h2 className="text-4xl md:text-7xl font-bold text-white underline decoration-white/40 mb-2">
              + Computer Science
            </h2>
            <h2 className="text-3xl md:text-7xl font-bold text-white/70">
              based on earth(r).
            </h2>

            <a
              href="#contact"
              className="inline-flex items-center mt-12 px-8 py-4 rounded-full text-white font-medium border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-[0_10px_40px_rgba(138,180,248,0.25)]"
            >
              Let&apos;s Talk
            </a>

            <p className="text-sm text-white/60 mt-20">In the game since 2019</p>
          </div>

          {/* Right: Photo placeholder */}
          <div className="mx-auto w-[320px] md:w-[380px] h-[420px] md:h-[480px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.5)]" />
        </div>
      </div>

      {/* Floating decorative icon */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-24 right-1/4 opacity-60"
      >
        <Star className="w-5 h-5 text-white" />
      </motion.div>
    </section>
  )
}
