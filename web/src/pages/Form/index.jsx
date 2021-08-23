import React from 'react';


import './style.css'


 export default function Form() {
     return (

     <div id="page-form" className="container-form">

      <main>
         <fieldset>
           <legend>Dados para cadastro</legend>
          
           <div className="input-form">
          <label htmlFor="name">Nome Completo</label>
          <input type="text" />
           </div>
          

          <div className="input-form">
             <label htmlFor="job">Cargo Pretendido</label>
             <input type="text" />
          </div>

          <div className="input-form">
             <label htmlFor="data-nascimento">Data de Nascimento</label>
             <input type="text" />
          </div>
         </fieldset>
     </main>
   </div> 


     );
 }