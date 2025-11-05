import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-2 text-sm text-white/90 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-white font-semibold tracking-tight">
              <span className="text-white/70">&lt;/&gt;</span> Made
            </a>

            <nav className="hidden md:flex items-center">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#blog">Blog</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <button
              className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-2 py-2">
              <div className="flex flex-col">
                <NavLink href="#work" onClick={() => setOpen(false)}>Work</NavLink>
                <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
                <NavLink href="#blog" onClick={() => setOpen(false)}>Blog</NavLink>
                <NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
