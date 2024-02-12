import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function PaymentButtons() {
    const [count, setCount] = useState(1);

        /* Sipariş Miktarı */
    const handleDecrement = () => {
        if(count > 1){ 
            setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

        /* Sipariş Onaylama Kutusu */
    


    return (
        <main className='payment-container'>
        <div className="sayac-container">
            <form onSubmit={handleSubmit}>
                <button type='button' onClick={handleDecrement}>-</button>
                <div className="sayac-value">{count}</div>
                <button type='button' onClick={handleIncrement}>+</button>  
            </form>
        </div>
        <div className='siparis-container'>
            <form>
                <h2>Sipariş Toplamı</h2>
                <div>Seçimler  {}</div>
                <div>Toplam  {}</div>
                <button type='button' onClick="{}">SİPARİŞ VER</button>
            </form>
        </div>
        </main>
    )
}