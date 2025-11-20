import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Sparkles, ShieldCheck, Zap } from 'lucide-react'

export default function Landing(){
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50">
      <Navbar />
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-6">
        {[{
          icon: Sparkles,
          title: 'AI-Powered Notes',
          desc: 'Generate clean, exam-ready notes with controllable tone and length.'
        },{
          icon: Zap,
          title: 'Multi-Format Input',
          desc: 'Upload videos, audio, PDFs, DOCX, PPTX, paste URLs or text.'
        },{
          icon: ShieldCheck,
          title: 'Save & Export',
          desc: 'Edit notes, auto-save history, and export to TXT/MD.'
        }].map((f,i)=> (
          <div key={i} className="border border-cyan-500/20 rounded-2xl p-5 bg-slate-900/50">
            <f.icon className="text-cyan-300"/>
            <div className="mt-3 font-semibold text-cyan-100">{f.title}</div>
            <div className="text-cyan-300/80 text-sm">{f.desc}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
