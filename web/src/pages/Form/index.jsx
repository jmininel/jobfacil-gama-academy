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
          <input type="text" name="nome" onChange={handleInputChange} value={formValues.nome || ''} />
           </div>
          

          <div className="input-form">
             <label htmlFor="job">Cargo Pretendido</label>
             <input type="text" name="cargo" onChange={handleInputChange} value={formValues.cargo || ''}  />
          </div>

          <div className="input-form">
             <label htmlFor="data-nascimento">Data de Nascimento</label>
             <input type="text" name="age" onChange={handleInputChange} value={formValues.age || ''}  />
             
             <button type="submit">Enviar</button>
             
          </div>
         </form>
     </main>
   </div> 


     );
 }