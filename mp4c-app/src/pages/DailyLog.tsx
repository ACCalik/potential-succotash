import { useState } from 'react'
import { save, load } from '../storage'

interface LogEntry {
  time: string
  food: string
  drink: string
  medication: string
  sleep: string
  complaints: string
  activity: string
}

export default function DailyLog() {
  const today = new Date().toISOString().split('T')[0]
  const existing = load<LogEntry[]>('log-' + today) || []
  const [entries, setEntries] = useState<LogEntry[]>(existing)
  const [entry, setEntry] = useState<LogEntry>({ time: '', food: '', drink: '', medication: '', sleep: '', complaints: '', activity: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setEntry({ ...entry, [name]: value })
  }

  function addEntry() {
    const updated = [...entries, entry]
    setEntries(updated)
    save('log-' + today, updated)
    setEntry({ time: '', food: '', drink: '', medication: '', sleep: '', complaints: '', activity: '' })
  }

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <input name="time" value={entry.time} onChange={handleChange} placeholder="Zeit" className="border p-1" />
        <input name="food" value={entry.food} onChange={handleChange} placeholder="Nahrung" className="border p-1" />
        <input name="drink" value={entry.drink} onChange={handleChange} placeholder="Getränke" className="border p-1" />
        <input name="medication" value={entry.medication} onChange={handleChange} placeholder="Medikamente" className="border p-1" />
        <input name="sleep" value={entry.sleep} onChange={handleChange} placeholder="Schlaf" className="border p-1" />
        <textarea name="complaints" value={entry.complaints} onChange={handleChange} placeholder="Beschwerden" className="border p-1"></textarea>
        <input name="activity" value={entry.activity} onChange={handleChange} placeholder="Bewegung" className="border p-1" />
        <button type="button" onClick={addEntry} className="border p-1 bg-green-500 text-white">Hinzufügen</button>
      </div>
      <ul className="space-y-1">
        {entries.map((e, idx) => (
          <li key={idx} className="border p-1">
            {e.time} {e.food} {e.drink} {e.medication} {e.sleep} {e.complaints} {e.activity}
          </li>
        ))}
      </ul>
    </div>
  )
}
