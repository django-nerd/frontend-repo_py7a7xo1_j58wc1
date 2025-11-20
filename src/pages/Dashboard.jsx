import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function Dashboard(){
  const [notes, setNotes] = useState([])
  useEffect(()=>{ (async()=>{
    const res = await fetch(`${BACKEND}/notes`)
    const data = await res.json()
    setNotes(data.items||[])
  })() },[])

  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <a href="/upload" className="px-4 py-2 rounded-lg bg-cyan-600 text-white">New Notes</a>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {notes.map(n=> (
            <a key={n._id} href={`/editor/${n._id}`} className="border border-cyan-500/20 rounded-xl p-4 bg-slate-900/50 hover:border-cyan-400/40">
              <div className="font-semibold text-cyan-100 truncate">{n.title}</div>
              <div className="text-xs text-cyan-300/70 mt-1">{new Date(n.created_at?.$date || Date.now()).toLocaleString()}</div>
              <div className="text-cyan-200/80 line-clamp-3 mt-2 whitespace-pre-wrap">{(n.content||'').slice(0,180)}</div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
