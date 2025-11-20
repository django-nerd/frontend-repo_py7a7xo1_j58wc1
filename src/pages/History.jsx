import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function History(){
  const [notes, setNotes] = useState([])
  useEffect(()=>{ (async()=>{
    const res = await fetch(`${BACKEND}/notes`)
    const data = await res.json()
    setNotes(data.items||[])
  })() },[])

  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10 space-y-6">
        <h2 className="text-2xl font-semibold">Saved Notes & History</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {notes.map(n=> (
            <div key={n._id} className="border border-cyan-500/20 rounded-xl p-4 bg-slate-900/50">
              <div className="font-semibold text-cyan-100">{n.title}</div>
              <div className="text-xs text-cyan-300/70 mt-1">{new Date(n.created_at?.$date || Date.now()).toLocaleString()}</div>
              <div className="mt-2 text-cyan-200/90 whitespace-pre-wrap max-h-40 overflow-auto">{(n.content||'').slice(0,800)}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
