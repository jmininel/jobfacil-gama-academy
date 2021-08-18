import React from 'react';

import './style.css';

import logoImg from '../../assets/images/pandaLogo.png';


 

export default function Landing() {
    return (
       <div className="container">
         <div className="logo_container">
             <img className="logoImg" src={logoImg} alt="logo" />
             <h2>O maior portal de empregos, é facil e rápido</h2>
             <h2>Seu proximo emprego esta aqui!</h2>
        </div>

    

        
            
        <div className="button">
            <a href="" className="cadastro">Cadastre-se</a>
        </div>






       </div>
    )
}
