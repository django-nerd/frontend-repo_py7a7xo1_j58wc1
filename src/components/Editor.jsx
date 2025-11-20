import { useEffect, useRef } from 'react'

export default function Editor({ value, onChange }){
  const ref = useRef(null)
  useEffect(()=>{
    if(ref.current && value !== undefined){
      ref.current.innerText = value
    }
  },[value])
  return (
    <div
      ref={ref}
      contentEditable
      onInput={(e)=>onChange?.(e.currentTarget.innerText)}
      className="min-h-[260px] bg-slate-900 border border-cyan-500/20 rounded-xl p-4 text-cyan-100 focus:outline-none focus:border-cyan-400 whitespace-pre-wrap"
      spellCheck={false}
    />
  )
}
