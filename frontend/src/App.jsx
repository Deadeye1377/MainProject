import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button>About</button>
      <button>Help</button>
      <button>Menu1</button>
      <button>Menu2</button>
    </div>
  )
}

export default App
