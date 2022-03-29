import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-0">
      <h1
        className="text-5xl"
      >
        Hello, world!
      </h1>
    </div>
  )
}

export default App
