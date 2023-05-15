import React, { useState } from 'react'


export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState();

  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarTarea = (e)=>{

    //Crear estado y actulizarlo

    setBusqueda(e.target.value);

    console.log (busqueda)

    //Listado completo de tareas  



    //Filtrar listado para buscar coincidencias

    let tareas_encontradas = listadoState.filter(tarea =>{
      return tarea.titulo.toLowerCase().includes(busqueda.toLowerCase())
    })

   if (busqueda.length<=1 || tareas_encontradas<=0 ){
    tareas_encontradas = JSON.parse(localStorage.getItem("tareas"));
    setNoEncontrado(true);
   }else{
    setNoEncontrado(false);
   } 


    //Actualizar el estado del listado principal con lo que he filtrado

    setListadoState (tareas_encontradas);

    
  } 

  return (
    <div className="search">
    <h3 className="title">Buscador</h3>
    {(noEncontrado == true && busqueda.length>1) && (
      <span className='no_encontrado'> No hay coincidencias </span>
    )}
     
    <form>
        <input onChange={buscarTarea}                
                type="text"
                id="search_field" 
                name="busqueda"
                placeholder='Tarea a buscar'
                autoComplete='off'
                value={busqueda}
                
                />
        <button id="search">Buscar</button>
    </form>
    </div>
  )
}

