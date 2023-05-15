
import { Listado } from './components/Listado';
import { Buscador } from './components/Buscador';
import { Crear } from './components/Crear';
import { useState } from 'react';


function App() {

    const [listadoState, setListadoState] = useState([]);


  return (

<body>  

    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
           
            
            
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                
            </ul>

            
        </nav>

        
       
  

        {/*Contenido principal*/}
        <section id="content" className="content"> 
         {/* CODIGO DE COLOR */}

       

            {/*aqui van las tareas*/}
            <Listado listadoState={listadoState} setListadoState={setListadoState} />

        </section>

        {/*Barra lateral*/}
        <aside className="lateral">

        <Buscador listadoState={listadoState} setListadoState={setListadoState}  />

         <Crear setListadoState={setListadoState} />

        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; To do list with react - <a href="https://maximilianoguerzoni.es">maximilianoguerzonidev.es</a>
        </footer>

    </div>

    
</body>

  );
}

export default App;
