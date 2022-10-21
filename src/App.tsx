import { useState } from 'react'
import logo from './assets/logo.png'
import { Header } from './components/Header'
import { Main } from './components/Main'
import './global.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
