import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoSVG  from "../../Assets/mile1-assets/logo.svg"; //Logo


export default function MainPage () {
    const history = useHistory();

    const handleButton = () => {
        history.push("/siparis-olustur")
    }

 return(
    <>
    <div style={{
                backgroundImage: `url(http://localhost:5173/Assets/mile1-assets/home-banner.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh', // Adjust height as needed*/
                textAlign: 'center',
                color: 'white', // Text color on the banner
                paddingTop: '100px', // Adjust as needed for vertical centering
            }}>
    <img src={LogoSVG} alt="Logo" />
    <h1 className='main-title'>KOD ACIKTIRIR <br /> PİZZA DOYURUR</h1>
    <button id='anasayfa-buton' onClick={handleButton}>ACIKTIM</button>
    </div>
    <nav className='main-nav'>
        <ul>
            <li><a href="/"><img src="Assets\mile2-aseets\icons\1.svg" alt="Kore" />YENİ! Kore</a></li>
            <li><a href="/"><img src="Assets\mile2-aseets\icons\2.svg" alt="Pizza" />Pizza</a></li>
            <li><a href="/"><img src="Assets\mile2-aseets\icons\3.svg" alt="Burger" />Burger</a></li>
            <li><a href="/"><img src="Assets\mile2-aseets\icons\4.svg" alt="Kızartmalar" />Kızartmalar</a></li>
            <li><a href="/"><img src="Assets\mile2-aseets\icons\5.svg" alt="Fast Food" />Fast Food</a></li>
            <li><a href="/"><img src="Assets\mile2-aseets\icons\6.svg" alt="Gazlı İçecek" />Gazlı İçecek</a></li>
        </ul>
    </nav>
    <section>
        
    </section>
    </>
    
 )
};