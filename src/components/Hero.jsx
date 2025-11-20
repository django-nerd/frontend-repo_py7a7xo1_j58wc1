import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative min-h-[78vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl w-full px-6 py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">Smart Notes Generator</h1>
          <p className="text-cyan-200/90 text-lg md:text-xl mb-8">Upload lectures, paste links, or drop documents. Get clean, exam-ready notes in seconds — with AI-powered transcripts, summaries, and quizzes.</p>
          <div className="flex items-center gap-3">
            <Link to="/upload" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] transition">
              Get Started <ArrowRight size={18}/>
            </Link>
            <Link to="/dashboard" className="px-5 py-3 rounded-xl border border-cyan-400/30 text-cyan-200 hover:bg-cyan-400/10 transition">Go to Dashboard</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
