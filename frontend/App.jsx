import { useState } from 'react'
import Header from './Header.jsx'
import Content from './Content.jsx'
import './scss/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Content/>
    </>
  )
}

export default App
