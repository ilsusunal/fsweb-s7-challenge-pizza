import { useState } from 'react'
import './App.css'
import OrderPizza from "./components/OrderPizza";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='form-header'>
        <h1>Teknolojik Yemekler</h1>
        <nav className='nav-menu'>
          <a href="/anasayfa">Anasayfa</a>
          <p> - </p>
          <a href="/secenekler">Seçenekler</a>
          <p> - </p>
          <a href="/siparis-olustur">Sipariş Oluştur</a>
        </nav>
    </header>
    <main className='main-content'>
     <OrderPizza/>
    </main>
    
    </>
  )
}

export default App
