import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {

  // const [listadoState, setListadoState] = useState([]);

  useEffect(() => {
    conseguirTareas()
  }, [])

  const [editar, setEditar] = useState(0);

  const borrarTarea = (id) => {
    //conseguir tareas almacenadas
    let tareas_almacenadas = conseguirTareas();

    //filtar Tarea a eliminar
    let nuevo_listado_tareas = tareas_almacenadas.filter(tarea => tarea.id !== parseInt(id));

    //actualizar estado del listado
    setListadoState(nuevo_listado_tareas);

    //actualizar datos del localstorage
    localStorage.setItem("tareas", JSON.stringify(nuevo_listado_tareas));
  }

  const conseguirTareas = () => {
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    setListadoState(tareas)

    return tareas
  }


  return (
    <>
      {listadoState != null ?
        listadoState.map(tarea => {

          return (
            
            <article key={tarea.id} className="tarea-item">
              <h3 className="title">{tarea.titulo}</h3>
              <p className="description">{tarea.descripcion}</p>
              <p className="prioridad" style={tarea.prioridad === "2" ?
                { background: "yellow", maxWidth: "75%  ", color: "yellow",borderRadius:"10px" } :
                (tarea.prioridad === "3" ? { background: "red", maxWidth: "100%", color: "red", borderRadius:"10px" } :
                  (tarea.prioridad === "1" ? { background: "green", maxWidth: "30%", color: "green", borderRadius:"10px" } :
                    { background: "white" }))}>
                {tarea.prioridad}
              </p>

              <button onClick={() => setEditar(tarea.id)} className="edit">Editar</button>
              <button onClick={() => borrarTarea(tarea.id)} className="delete">Borrar</button>

              {editar == tarea.id && (
                <Editar tarea={tarea}
                  conseguirTareas={conseguirTareas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}


            </article>
          );
        })
        : <h2>NO HAY TAREAS QUE MOSTRAR</h2>
      }


    </>
  )
}


