import { useState } from 'react'
import { save, load } from '../storage'

interface UserData {
  name: string
  age: number
  height: number
  weight: number
  gender: string
  goal: string
}

export default function Onboarding({ onDone }: { onDone: () => void }) {
  const existing = load<UserData>('user')
  const [data, setData] = useState<UserData>(
    existing ?? { name: '', age: 0, height: 0, weight: 0, gender: '', goal: '' }
  )

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setData({ ...data, [name]: name === 'age' || name === 'height' || name === 'weight' ? Number(value) : value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    save('user', data)
    onDone()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" value={data.name} onChange={handleChange} placeholder="Name" className="border p-1" />
      <input name="age" type="number" value={data.age} onChange={handleChange} placeholder="Alter" className="border p-1" />
      <input name="height" type="number" value={data.height} onChange={handleChange} placeholder="Größe" className="border p-1" />
      <input name="weight" type="number" value={data.weight} onChange={handleChange} placeholder="Gewicht" className="border p-1" />
      <input name="gender" value={data.gender} onChange={handleChange} placeholder="Geschlecht" className="border p-1" />
      <input name="goal" value={data.goal} onChange={handleChange} placeholder="Ziel" className="border p-1" />
      <button type="submit" className="border p-1 bg-blue-500 text-white">Speichern</button>
    </form>
  )
}
