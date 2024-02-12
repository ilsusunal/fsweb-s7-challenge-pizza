import React from 'react';
import {Switch, Route} from "react-router-dom"; 

export default function MainPage () {
 return(
    <>
    <div style={{
                backgroundImage: `http://localhost:5174/Assets/mile1-assets/home-banner.png`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
               /*height: '300px', // Adjust height as needed*/
                textAlign: 'center',
                color: 'white', // Text color on the banner
                paddingTop: '100px', // Adjust as needed for vertical centering
            }}><h1>Teknolojik Yemekler</h1>
    <h1>KOD ACIKTIRIR <br /> PİZZA DOYURUR</h1>
    <button id='anasayfa-buton'>ACIKTIM</button>
    </div>
    
    </>
 )
};