import { useState } from 'react'
import Matriz from './Matriz'
import Selector_port from "./Selector_port"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{display:"flex"}}>
      <Matriz/>
      <Selector_port/>
    </div>
  )
}

export default App
