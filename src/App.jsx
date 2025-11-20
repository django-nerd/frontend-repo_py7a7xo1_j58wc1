import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Upload from './pages/Upload'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import EditorPage from './pages/EditorPage'

function App(){
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/editor/:id" element={<EditorPage />} />
      </Routes>
    </div>
  )
}

export default App
