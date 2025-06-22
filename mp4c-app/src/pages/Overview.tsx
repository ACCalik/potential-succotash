import { load } from '../storage'

export default function Overview() {
  const today = new Date().toISOString().split('T')[0]
  const entries = load<any[]>('log-' + today) || []
  const user = load<any>('user')
  return (
    <div className="space-y-2">
      <h2 className="text-xl">Übersicht für {today}</h2>
      {user && <div>Benutzer: {user.name}</div>}
      <ul className="space-y-1">
        {entries.map((e, idx) => (
          <li key={idx} className="border p-1">{JSON.stringify(e)}</li>
        ))}
      </ul>
    </div>
  )
}
