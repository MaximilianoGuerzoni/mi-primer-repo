import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/guardarEnStorage';

export const Crear = ({ setListadoState }) => {

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



  const tituloComponente = "Añadir Tarea";
  const [tareaState, setTareaState] = useState(
    {
      titulo: "",
      descripcion: "",
      prioridad: "",
    }
  );

  const { titulo, descripcion, prioridad } = tareaState;

  const conseguirDatosForm = e => {
    e.preventDefault();

    //conseguir datos de formulario

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    let prioridad = target.prioridad.value;

    // alert (titulo + "-" + descripcion);

    // creando objeto tarea

    let tarea = {
      id: new Date().getTime(),
      titulo,
      descripcion,
      prioridad

    };
    setTareaState(tarea)
    console.log(setTareaState);


    //ACTUALIZAR ESTADO DEL LISTADO
    setListadoState(elementos => {
      return [...elementos, tarea];
    });

    //GUARDA ESTADO EN EL LOCALSTORAGE  
    GuardarEnStorage("tareas", tarea);





  }



  return (
    <div className="add">
      <h3 className="title"> {tituloComponente} </h3>
      <p>Ultima tarea:</p>

      <strong>
        {(titulo && descripcion && "Has creado " + titulo + "Prioridad:" + prioridad)}
      </strong>

      <form onSubmit={conseguirDatosForm} >
        <input type="text"
          id="titulo"
          name="titulo"
          placeholder="Titulo" />

        <textarea
          id="description"
          name="descripcion"
          placeholder="Descripción">

        </textarea>

        <div>
          <input type="range" min="1" max="3" list="opciones" onChange={handleRangeChange} id="prioridad"
          name="prioridad"/>
          <datalist id="opciones">
            {opciones.map(opcion => (
              <option key={opcion} value={opcion} />
            ))}
          </datalist>
          <p>Valor seleccionado: {valor}</p>
        </div>
        <input
          type="submit"
          id="save"
          value="Guardar" />
      </form>
    </div>
  )
}
