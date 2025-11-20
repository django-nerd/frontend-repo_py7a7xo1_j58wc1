import { useState } from 'react'
import { UploadCloud, Link2, FileText, Loader2 } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function UploadPanel({ onExtract }){
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [text, setText] = useState('')

  const handleFile = async (e)=>{
    const file = e.target.files?.[0]
    if(!file) return
    setLoading(true)
    try{
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch(`${BACKEND}/upload`, { method:'POST', body: fd })
      const data = await res.json()
      onExtract({ type:'file', name:file.name, text: data.text })
    }catch(e){
      alert('Upload failed')
    }finally{ setLoading(false) }
  }

  const handleUrl = async ()=>{
    if(!url) return
    setLoading(true)
    try{
      const fd = new FormData()
      fd.append('url', url)
      const res = await fetch(`${BACKEND}/extract-url`, { method:'POST', body: fd })
      const data = await res.json()
      onExtract({ type:'url', name:url, text: data.text })
    }catch(e){ alert('URL extraction failed') }
    finally{ setLoading(false) }
  }

  const handleText = ()=>{
    if(!text.trim()) return
    onExtract({ type:'text', name:'Pasted Text', text })
  }

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <label className="col-span-1 border-2 border-dashed border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400/60 transition cursor-pointer">
        <input type="file" className="hidden" onChange={handleFile} />
        <UploadCloud className="mx-auto text-cyan-300" />
        <div className="mt-2 text-cyan-200 font-medium">Drag & drop or click to upload</div>
        <div className="text-xs text-cyan-300/70">Video, audio, PDF, DOCX, PPTX, TXT</div>
      </label>

      <div className="col-span-1 border border-cyan-500/20 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2 text-cyan-200"><Link2 size={16}/> Paste URL</div>
        <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="YouTube, Drive, Webpage..." className="w-full bg-slate-900 border border-cyan-500/20 rounded-lg px-3 py-2 text-cyan-100 placeholder-cyan-300/40 outline-none focus:border-cyan-400"/>
        <button onClick={handleUrl} className="mt-3 w-full px-3 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500">Extract</button>
      </div>

      <div className="col-span-1 border border-cyan-500/20 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2 text-cyan-200"><FileText size={16}/> Paste Text</div>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={5} placeholder="Paste any text here..." className="w-full bg-slate-900 border border-cyan-500/20 rounded-lg px-3 py-2 text-cyan-100 placeholder-cyan-300/40 outline-none focus:border-cyan-400"/>
        <button onClick={handleText} className="mt-3 w-full px-3 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500">Use Text</button>
      </div>

      {loading && (
        <div className="col-span-3 flex items-center gap-2 text-cyan-300"><Loader2 className="animate-spin"/> Processing...</div>
      )}
    </div>
  )
}
