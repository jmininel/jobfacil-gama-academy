import { func } from 'prop-types';
import React  from 'react';
import './style.css'


export default function Cep() {
     
  function onBlurCep(e) {
      const { value } = e.target;

      const cep = value?.replace(/[^0-9]/g, '') 
       
      if (cep?.length !== 8) {
          return;
      }
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
         .then((res) => res.json())
         .then((data) => ;
    }
   
   return (
    <div id="page-form" className="container-form">

    <main>
       <form>
         <h3>Dados para cadastro</h3>
        
        <div className="input-form">
           <label htmlFor="cep">CEP</label>
           <input id="cep" type="text" name="cep" onBlur={onBlurCep}  />
         </div>

         <div className="input-form">
           <label htmlFor="endereco">Endereco</label>
           <input id="endereco" type="text" name="endereco"    />
         </div>

           <button  className="btn" type="submit">Enviar</button>
       </form>
   </main>
 </div> 



   )
    


}