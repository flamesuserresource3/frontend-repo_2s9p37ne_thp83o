import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Made. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
