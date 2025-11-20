import { Download, Save, Wand2 } from 'lucide-react'

export default function NotesCard({ title, content, onSave, onDownload }){
  return (
    <div className="border border-cyan-500/20 rounded-2xl p-5 bg-slate-900/60">
      <div className="flex items-center justify-between">
        <h3 className="text-cyan-100 font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          <button onClick={onSave} className="px-3 py-1.5 rounded-lg bg-cyan-600 text-white">Save</button>
          <button onClick={onDownload} className="px-3 py-1.5 rounded-lg border border-cyan-500/30 text-cyan-200">Download</button>
        </div>
      </div>
      <pre className="mt-3 text-cyan-200/90 whitespace-pre-wrap leading-relaxed">{content}</pre>
    </div>
  )
}
