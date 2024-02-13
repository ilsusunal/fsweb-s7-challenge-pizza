import LogoSVG  from "../../Assets/mile1-assets/logo.svg";
import React from 'react';


export default function Success (props) {
    /* Data aktarılmazsa error mesajı ver. */
    if (!props.location.state || !props.location.state.formData) {
        return <p>Bir hata oluştu! Lütfen tekrar deneyin.</p>;
    }

    /* Destructuring formData */
    const {formData, count, form} = props.location.state;

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
                    <div><p>Boyut: </p> <p>{formData.boyut}</p></div> 
                    <div><p>Hamur: </p> <p>{formData.hamur}</p></div> 
                    <div><p>Ek Malzemeler: </p> <p>{formData.malzemeler.join(', ')}</p></div>
                </section>
                <section className='payment-container'>
                    <div className='siparis-odeme-info'>
                        <h2>Sipariş Toplamı</h2>
                        <div><p>Seçimler</p> <p>{form.malzemeler.length * 5} ₺</p></div>
                        <div><p>Toplam</p> <p>{(85.5 * count) + (form.malzemeler.length * 5)} ₺</p></div>
                    </div>
                </section>
            </section>
            
        </main>

        </>
    )
}