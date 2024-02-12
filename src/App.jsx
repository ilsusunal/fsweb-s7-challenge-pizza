import { useState } from 'react'
import './App.css'

import OrderPizza from "./components/OrderPizza";
import MainPage from './components/MainPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='main-content'>
      <MainPage/>
    </main>
    </>
  )
}

export default App
