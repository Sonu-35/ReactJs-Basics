import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)


  const addValue = () => {
    setCount(counter + 1)
  }

  const removeValue = () => {
    setCount(counter - 1)
  }

  return (
    <>
      <h1>02 Counter project</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>add value</button>
      <br />
      <button
      onClick = {removeValue}
      >remove value</button>
    </>
  )
}

export default App
