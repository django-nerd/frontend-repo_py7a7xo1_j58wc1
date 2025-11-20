import Navbar from '../components/Navbar'
import Editor from '../components/Editor'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function EditorPage(){
  const { id } = useParams()
  const [note, setNote] = useState(null)

  useEffect(()=>{ (async()=>{
    const res = await fetch(`${BACKEND}/notes/${id}`)
    const data = await res.json()
    setNote(data)
  })() },[id])

  const save = async ()=>{
    alert('Auto-save is enabled in production; this demo shows content locally.')
  }

  if(!note) return <div className="min-h-screen bg-slate-950 text-cyan-50"><Navbar /><div className="p-6">Loading...</div></div>

  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-10 space-y-4">
        <input value={note.title} onChange={e=>setNote({...note, title:e.target.value})} className="w-full bg-slate-900 border border-cyan-500/20 rounded-lg px-3 py-2 text-cyan-100"/>
        <Editor value={note.content} onChange={(v)=>setNote({...note, content:v})}/>
        <div className="text-right">
          <button onClick={save} className="px-4 py-2 rounded-lg bg-cyan-600 text-white">Save</button>
        </div>
      </main>
    </div>
  )
}
