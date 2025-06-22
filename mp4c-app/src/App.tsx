import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Onboarding from './pages/Onboarding'
import DailyLog from './pages/DailyLog'
import Overview from './pages/Overview'
import Analysis from './pages/Analysis'
import DeveloperSettings from './components/DeveloperSettings'
import { load } from './storage'
import './App.css'

function App() {
  const userExists = !!load('user')
  const [unlocked, setUnlocked] = useState(false)

  return (
    <Router>
      <nav className="space-x-2 border-b pb-2">
        <Link to="/">Onboarding</Link>
        <Link to="/log">Tagesprotokoll</Link>
        <Link to="/overview">Übersicht</Link>
        <Link to="/analysis">Analyse</Link>
        <Link to="/dev">Dev</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Onboarding onDone={() => {}} />} />
        <Route path="/log" element={userExists ? <DailyLog /> : <Navigate to="/" />} />
        <Route path="/overview" element={userExists ? <Overview /> : <Navigate to="/" />} />
        <Route path="/analysis" element={userExists ? <Analysis /> : <Navigate to="/" />} />
        <Route path="/dev" element={unlocked ? <div>Moduleinstellungen</div> : <DeveloperSettings onUnlock={() => setUnlocked(true)} />} />
      </Routes>
    </Router>
  )
}

export default App
