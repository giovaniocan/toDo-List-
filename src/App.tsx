import { useState } from 'react'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'


import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header />
      <NewTask/>
    </div>
  )
}

export default App
