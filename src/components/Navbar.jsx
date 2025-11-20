import { Link, NavLink } from 'react-router-dom'
import { Menu, Sparkles, History, UploadCloud, FileText, Settings } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.5)]" />
          <span className="text-cyan-200 font-semibold tracking-tight">Smart Notes</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-cyan-100/80">
          <NavLink to="/" className={({isActive})=>`hover:text-cyan-300 ${isActive?'text-cyan-300':''}`}>Home</NavLink>
          <NavLink to="/dashboard" className={({isActive})=>`hover:text-cyan-300 ${isActive?'text-cyan-300':''}`}>Dashboard</NavLink>
          <NavLink to="/upload" className={({isActive})=>`hover:text-cyan-300 ${isActive?'text-cyan-300':''}`}>Upload</NavLink>
          <NavLink to="/history" className={({isActive})=>`hover:text-cyan-300 ${isActive?'text-cyan-300':''}`}>History</NavLink>
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-cyan-500/20 text-cyan-200"><Menu size={18}/></button>
      </div>
    </header>
  )
}
