import LogoSVG  from "../../Assets/mile1-assets/logo.svg";
import { useHistory } from 'react-router-dom';
import React from 'react';


export default function Success({ orderData }) {
    const history = useHistory();

    const handleButton = () => {
        history.push("/");
    }

    /* orderData geliyor mu */
    if (!orderData) {
        return <p>Sipariş verileri eksik veya hatalı.</p>;
    } else {
        console.log("SUCCESS DATA:", orderData);
    }

    /* Destructure orderData  */
    const { isimSoyisim, boyut, hamur, malzemeler, siparisNotu } = orderData;

    return (
        <>
            <header className="success-page">
                <img src={LogoSVG} alt="Logo" />
                <section className="siparis-alindi">
                    <h3 className="secondary-title">lezzetin yolda</h3>
                    <h1 className='main-title'>SİPARİŞ ALINDI</h1>
                </section>
            </header>
            <main className="success-page">
                <section className="siparis-alindi-info">
                    <h2>Position Absolute Acı Pizza</h2>
                    <section className="siparis-form-info">
                        <div><p>İsim Soyisim: </p> <p> {isimSoyisim}</p></div>
                        <div><p>Boyut: </p> <p> {boyut}</p></div>
                        <div><p>Hamur: </p> <p> {hamur}</p></div>
                        <div><p>Ek Malzemeler: </p> <p> {malzemeler.join(', ')}</p></div>
                        <div><p>Sipariş Notu: </p> <p> {siparisNotu}</p></div>
                    </section>
                </section>
                <button id='success-buton' onClick={handleButton}>Anasayfaya Dön</button>
            </main>
        </>
    )
}