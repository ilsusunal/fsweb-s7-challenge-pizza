import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import OrderPizza from "./components/OrderPizza";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OrderPizza/>
    </>
  )
}

export default App
