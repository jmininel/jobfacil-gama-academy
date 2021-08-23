import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import logoPanda from '../../assets/images/logo.png'

export default function Landing() {
    return (
       <div className="container">
         <div className="logo_container">
            <img className="logopanda" src={logoPanda} alt="logo" />
             <h2>O maior portal de empregos, é facil e rápido</h2>
             <h2>Seu proximo emprego esta aqui!</h2>
        </div>
       
        <div className="button_class">
            <Link to ="/formulario" className="cadastro">Cadastre-se</Link>
        </div>
     </div>
    )
}
