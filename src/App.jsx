import { useState } from 'react'
import Api from './assets/compounds/Api'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>rest-countries</h1>
      <Api></Api>
    </>
  )
}

export default App
