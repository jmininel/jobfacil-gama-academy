import './style.css';
import axios from 'axios';
import { useState } from 'react';


 function Cep() {
  const [cep, setCep] = useState('');
  
 
  function cepApi() {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
    const repositories = response.data ;
    const dados = repositories;
   
   document.getElementById('rua').value = dados.logradouro;
   document.getElementById('bairro').value = dados.bairro;
   document.getElementById('city').value = dados.localidade;
   document.getElementById('state').value = dados.uf;

    });
   
  }    
  
        return (
  <>
     <div id="page-form" className="container-form">

     <main>
     <h3>Dados para cadastro</h3>
        
         <div className="fieldSepareated">
            <div className="input-form">
              <span>Nome Completo</span>
              <input className="inputValue" type="text" name="nome"  />
           </div>
          

            <div className="input-form">
               <span>Cargo Pretendido</span>
               <input className="inputValue" type="text" name="cargo"  />
            </div>
        </div >
         
        <div className="fieldSepareated"> 
          <div className="input-form">
            <span>Data de Nascimento</span>
             <input className="inputValue" type="text" name="age"  />
           </div>

           <div className="input-form">
             <span>Sexo</span>
             <input className="inputValue" type="text" name="sex"  />
           </div>
         </div>  

         <div className="fieldSepareated" id="fieldCollumn"> 
            <div className="input-form" id="cepForm">
              <span>Cep</span>
            <input value={cep} onChange={e => setCep(e.target.value)} type="text" onClick={cepApi}/>
            </div>

            <div className="input-form">
            <span>Rua</span>
            <input type="text" id="rua"></input>
          </div>
     
        </div>  
     
     <div className="fieldSepareated"> 
            
          <div className="input-form">
            <span>Numero</span>
            <input type="text" id="number"></input>
          </div>

          <div className="input-form">
              <span>Bairro</span>
              <input type="text" id="bairro"></input>
          </div>
       </div>

      <div className="fieldSepareated">  
        <div className="input-form">
            <span>Cidade</span>
            <input type="text" id="city"></input>
        </div>

        <div className="input-form">
           <span>Estdo</span>
           <input type="text" id="state"></input>
        </div>
       </div>

       <div className="fieldSepareated">  
           <div className="input-form">
                <span>Telefone</span>
                <input type="text" id="fone"></input>
            </div>

            <div className="input-form">
              <span>Email</span>
              <input type="text" id="email"></input>
            </div>
       </div>
        
        
       <div className="fieldSepareated">  
           <div className="input-form">
                <span>*RG</span>
                <input type="text" id="rg"></input>
            </div>

            <div className="input-form">
              <span>*CPF</span>
              <input type="text" id="email"></input>
            </div>
       </div>
  


     <button className="btn" type="submit" >Enviar</button>
     </main>
     </div>
  </>

   );
 }

export default Cep;