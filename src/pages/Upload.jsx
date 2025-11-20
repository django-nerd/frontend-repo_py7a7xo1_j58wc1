import Navbar from '../components/Navbar'
import UploadPanel from '../components/UploadPanel'
import OptionsPanel from '../components/OptionsPanel'
import Editor from '../components/Editor'
import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function Upload(){
  const [extracted, setExtracted] = useState(null)
  const [options, setOptions] = useState(null)
  const [generated, setGenerated] = useState(null)
  const [title, setTitle] = useState('Smart Notes')

  const generate = async ()=>{
    if(!extracted?.text) return alert('Provide some input')
    const res = await fetch(`${BACKEND}/generate`,{
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ text: extracted.text, options, title, source_type: extracted.type })
    })
    const data = await res.json()
    setGenerated(data)
    setTitle(data.title)
  }

  const save = async ()=>{
    if(!generated) return
    const res = await fetch(`${BACKEND}/save`,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ title, content: generated.content, options: options||{}, transcript: extracted?.text }) })
    const data = await res.json()
    alert('Saved!')
  }

  const downloadTxt = async ()=>{
    const fd = new FormData()
    fd.append('title', title)
    fd.append('content', generated.content)
    const res = await fetch(`${BACKEND}/export/txt`,{ method:'POST', body: fd })
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href=url; a.download=`${title}.txt`; a.click(); URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10 space-y-6">
        <div className="text-2xl font-semibold">Create Notes</div>
        <UploadPanel onExtract={setExtracted}/>
        <OptionsPanel onChange={setOptions}/>

        {extracted && (
          <div className="border border-cyan-500/20 rounded-xl p-4">
            <div className="text-sm text-cyan-300/80">Preview</div>
            <div className="max-h-48 overflow-auto text-cyan-200/90 whitespace-pre-wrap">{extracted.text.slice(0, 2000)}</div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <input value={title} onChange={e=>setTitle(e.target.value)} className="bg-slate-900 border border-cyan-500/20 rounded-lg px-3 py-2 text-cyan-100 outline-none focus:border-cyan-400"/>
          <button onClick={generate} className="px-4 py-2 rounded-lg bg-cyan-600 text-white">Generate</button>
          {generated && <>
            <button onClick={save} className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-200">Save</button>
            <button onClick={downloadTxt} className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-200">Download TXT</button>
          </>}
        </div>

        {generated && (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-cyan-300/80 mb-2">Edit Notes</div>
              <Editor value={generated.content} onChange={(v)=>setGenerated(g=>({...g, content:v}))} />
            </div>
            <div>
              <div className="text-sm text-cyan-300/80 mb-2">Keywords / Topics</div>
              <div className="border border-cyan-500/20 rounded-xl p-4 grid grid-cols-2 gap-2">
                {generated.keywords?.map(k=> <span key={k} className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 text-sm">{k}</span>)}
                {generated.topics?.map(k=> <span key={k} className="px-2 py-1 rounded bg-blue-500/10 text-blue-300 text-sm">{k}</span>)}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
