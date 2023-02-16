import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'


import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header />
      <Tasks/>
    </div>
  )
}

export default App
