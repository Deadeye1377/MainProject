import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState("")
  useEffect(()=>{
    fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(data => setCount(data.message))
    .then(err => console.log(err))
  })
  return (
   <Browse
  )
}

export default App
