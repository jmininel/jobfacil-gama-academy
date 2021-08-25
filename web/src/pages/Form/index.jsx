import { useState } from 'react';
import './style.css'



 export default function Form() {

       const [formValues, setFormValues] = useState({});

    
           
       const handleInputChange = (e) => {
           const { name, value } = e.target;
           setFormValues({...formValues, [name]: value});
        }
       
       const handleSubmit = (e) => {
           e.preventDefault();
           const formData = new FormData(e.target);
           const data = Object.fromEntries(formData);

         console.log('*** handleSubmit', data);
       };

      console.log('*** formValues',formValues );

    return (

     <div id="page-form" className="container-form">

      <main>
         <form onSubmit={handleSubmit}>
           <h3>Dados para cadastro</h3>
          
           <div className="input-form">
          <label htmlFor="name">Nome Completo</label>
          <input className="inputValue" type="text" name="nome" onChange={handleInputChange} value={formValues.nome || ''} />
           </div>
          

          <div className="input-form">
             <label htmlFor="job">Cargo Pretendido</label>
             <input className="inputValue" type="text" name="cargo" onChange={handleInputChange} value={formValues.cargo || ''}  />
          </div>

          <div className="input-form">
             <label htmlFor="data-nascimento">Data de Nascimento</label>
             <input className="inputValue" type="text" name="age" onChange={handleInputChange} value={formValues.age || ''}  />
           </div>

           <div className="input-form">
             <label htmlFor="cep">CEP</label>
             <input className="inputValue" type="text" name="cep"  onChange={handleInputChange} value={formValues.cep || ''}/>
           </div>

           <div className="input-form">
             <label htmlFor="endereco">Endereco</label>
             <input className="inputValue" type="text" name="endereco" onChange={handleInputChange} value={formValues.endereco || ''}  />
           </div>

             <button className="btn" type="submit">Enviar</button>
         </form>
     </main>
   </div> 


     );
 }