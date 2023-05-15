import React from 'react'
import {useState} from 'react';

export const Editar = ({ tarea, conseguirTareas, setEditar, setListadoState }) => {


    const [valor, setValor] = useState("");

  const valores = {
    1: "Bajo",
    2: "Medio",
    3: "Alto"
  };

  const opciones = Object.keys(valores);

  function handleRangeChange(event) {
    const valorSeleccionado = event.target.value;
    const valorTexto = valores[valorSeleccionado];
    setValor(valorTexto);
  }

    const titulo_componente = "Editar Tarea"

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        //conseguir el target del evento
        let target = e.target;
        //buscar el indice del objeto de la tarea a actualizar  
        const tareas_almacenadas = conseguirTareas();

        const indice = tareas_almacenadas.findIndex(tarea => tarea.id === id);

        //Crear objeto con ese indice
        let tarea_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
            prioridad: target.prioridad.value
        };

        //actualizar elemento de ese Indice
        tareas_almacenadas[indice] = tarea_actualizada

        // Guardar el nuevo array de objetos en el localStorage
        localStorage.setItem("tareas", JSON.stringify(tareas_almacenadas))

        //Actualizar estados 
        setListadoState(tareas_almacenadas);

        setEditar(0);


    }

    return (
        <div className='edit_form'>
            <h3 className='tittle'>{titulo_componente}: {tarea.titulo}</h3>
            <form onSubmit={e => guardarEdicion(e, tarea.id)}>
                <input type="text"
                    name="titulo"
                    className='titulo_editado'
                    defaultValue={tarea.titulo}
                ></input>
                <textarea
                    name="descripcion"
                    defaultValue={tarea.descripcion}
                    className='descripcion_editada'
                ></textarea>
                <div>
                    <input type="range" min="1" max="3" list="opciones" onChange={handleRangeChange} id="prioridad"
                        name="prioridad" />
                    <datalist id="opciones">
                        {opciones.map(opcion => (
                            <option key={opcion} value={opcion} />
                        ))}
                    </datalist>
                    <p>Valor seleccionado: {valor}</p>
                </div>

                <input type="submit" className='editar' value="Actualizar" />

            </form>
        </div>
    )
}
