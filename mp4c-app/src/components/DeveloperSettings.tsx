import { useState } from 'react'

export default function DeveloperSettings({ onUnlock }: { onUnlock: () => void }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  function submit() {
    if (code === '1234') {
      onUnlock()
    } else {
      setError('Falscher Code')
    }
  }

  return (
    <div className="space-y-2">
      <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Entwicklercode" className="border p-1" />
      <button onClick={submit} className="border p-1 bg-blue-500 text-white">Freischalten</button>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  )
}
