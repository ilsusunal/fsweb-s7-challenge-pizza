import LogoSVG  from "../../Assets/mile1-assets/logo.svg";
import React from 'react';

export default function Success () {

    return (
        <>
        <header className="success-page">
            <img src={LogoSVG} alt="Logo" />
            <h3 className="secondary-title">lezzetin yolda</h3>
            <h1 className='main-title'>TEBRİKLER!</h1> 
            <h1 className='main-title'>SİPARİŞİNİZ ALINDI!</h1> 
        </header>
        <main>
            
        </main>

        </>
    )
}