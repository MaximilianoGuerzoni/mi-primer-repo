export const GuardarEnStorage = (clave, elemento) =>{


    //CONSEGUIR ELEMENTOS QUE YA TENEMOS EN EL LOCALSTORAGE

    let elementos = JSON.parse(localStorage.getItem(clave));
    
    //COMPROBAR SI ES UN ARRAY

    if (Array.isArray(elementos )){
      //Añadir dentro de un array un nuevo elemento
      elementos.push(elemento);
    } else {
      //Crear un nuevo Array con la peli nueva
      elementos =[elemento];
    }  
    
    //GUARDAR EN EL LOCALSTORAGE  

    localStorage.setItem(clave, JSON.stringify(elementos));


    //DEVOLVER OBJETO GUARDADO
    return elemento;  
  
  }