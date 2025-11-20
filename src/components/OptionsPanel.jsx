import { useState, useEffect } from 'react'

export default function OptionsPanel({ onChange }){
  const [opts, setOpts] = useState({
    note_type: 'bullet',
    tone: 'simple',
    length: 'medium',
    highlight_key_points: true,
    include_examples: false,
    extract_definitions: true,
    include_formulas: false,
  })

  useEffect(()=>{ onChange?.(opts) },[opts])

  const section = 'border border-cyan-500/20 rounded-xl p-4'
  const label = 'text-sm text-cyan-200/90'
  const select = 'w-full bg-slate-900 border border-cyan-500/20 rounded-lg px-3 py-2 text-cyan-100 outline-none focus:border-cyan-400'

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className={section}>
        <div className={label}>Notes Type</div>
        <select className={select} value={opts.note_type} onChange={e=>setOpts(o=>({...o, note_type:e.target.value}))}>
          <option value="bullet">Bullet Notes</option>
          <option value="detailed">Detailed Notes</option>
          <option value="summary">Summary Notes</option>
          <option value="exam">Exam-Ready Notes</option>
          <option value="timestamp">Timestamp-Based Notes</option>
          <option value="mindmap">Mindmap Outline</option>
        </select>
      </div>

      <div className={section}>
        <div className={label}>Tone</div>
        <select className={select} value={opts.tone} onChange={e=>setOpts(o=>({...o, tone:e.target.value}))}>
          <option value="simple">Simple</option>
          <option value="professional">Professional</option>
          <option value="technical">Technical</option>
        </select>
      </div>

      <div className={section}>
        <div className={label}>Length</div>
        <select className={select} value={opts.length} onChange={e=>setOpts(o=>({...o, length:e.target.value}))}>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="detailed">Detailed</option>
        </select>
      </div>

      <div className={section}>
        <label className="flex items-center gap-2 text-cyan-100">
          <input type="checkbox" checked={opts.highlight_key_points} onChange={e=>setOpts(o=>({...o, highlight_key_points:e.target.checked}))} /> Highlight Key Points
        </label>
        <label className="flex items-center gap-2 text-cyan-100 mt-2">
          <input type="checkbox" checked={opts.include_examples} onChange={e=>setOpts(o=>({...o, include_examples:e.target.checked}))} /> Include Examples
        </label>
      </div>

      <div className={section}>
        <label className="flex items-center gap-2 text-cyan-100">
          <input type="checkbox" checked={opts.extract_definitions} onChange={e=>setOpts(o=>({...o, extract_definitions:e.target.checked}))} /> Extract Definitions
        </label>
        <label className="flex items-center gap-2 text-cyan-100 mt-2">
          <input type="checkbox" checked={opts.include_formulas} onChange={e=>setOpts(o=>({...o, include_formulas:e.target.checked}))} /> Include Formulas
        </label>
      </div>
    </div>
  )
}
