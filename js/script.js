//       *********      Array de base         *********      

let nombresArray = ["Max", "Alicia","Jose","Mercedes","Jander","Yessi","Anzu","Neimy","Hanna","Isaac","Juanjo","David",
"Paolo","Alba","Joaco","Alberto","Denisse", "Alfredo","Marcela","Laudy", "Victor","Yady","Alvaro","Roxana","Elena"];

//     *********      Función para elegir nombre  aleatorio    **********

function elegirNombreRandom(){
    let resultado = document.getElementById("randomResultado");  // Obtiene el elemento del documento con id de etiqueta p
    let nombreAleatorio = obtenerNombreAleatorio(nombresArray); // Llama función obtenerNombreAleatorio y guarda nombre aleatorio 
    resultado.textContent = nombreAleatorio; // Asigna  nombre aleatorio como texto del elemento con id randomResultado.
}

//     *********      Función que toma array como argumento y devuelve elemento aleatorio   **********

function obtenerNombreAleatorio(array) {
    let indiceAleatorio = Math.floor(Math.random() * array.length); // Genera un indice aleatorio dentro del rango del array
    return array[indiceAleatorio]; // Devuelve el elemento del array (que esta en el indice aleatorio)
  }

//     *********      Función para pintar el listado completo de nombresArray     **********

  function mostrarNombreModal() {
    let listadoNombres = document.getElementById("listadoNombres"); //  Ul (parametro id de ul)
  
    // Limpiar la lista actual
    listadoNombres.innerHTML = "";
  
    // Agregar cada nombre al listado
    nombresArray.forEach(name => {
      let listItem = document.createElement("li"); //(parametro: nombre de la etiqueta)
      listItem.textContent = name;
      listadoNombres.appendChild(listItem); //agrega los li al ul
    });
  }

//     *********      Función para agregar un elemento al array    **********

  function agregarNombre() {
    let addElementInput = document.getElementById("nombreInput"); //recibe como parametro id del input
    let newName = addElementInput.value.trim(); //Quitas espacios, adelante y atras
  
    if (newName !== "") { //si es diferente de vacio
      nombresArray.push(newName);//agrega el elemento escrito array
      addElementInput.value = ""; // Limpiar el input después de agregar
      // mostrarNombreModal(); //llama la funcion
    }
  }

//     *********      Función para eliminar un elemento del array    **********
  
  function eliminarNombre() {
    let removeElementInput = document.getElementById("nombreEliminar"); //parametro: id del input
    let nameToRemove = removeElementInput.value.trim(); //Quitas espacios, adelante y atras
  
    if (nameToRemove !== "") {// si es diferente de vacio
      let index = nombresArray.indexOf(nameToRemove); // devuelve la posicion de elemento
      
      if (index !== -1) {//si es diferente de -1, encontro el elemento escrito
        nombresArray.splice(index, 1);// borra 1 elemento de esa posicion o index
        removeElementInput.value = ""; // Limpiar el input después de eliminar
        // mostrarNombreModal();//vuelve a pintar el listado
      } 
      else {// sino encontro el elemento
        alert("El nombre no existe en el listado");
      }
    }
  }
  
  // Mostrar la lista inicial al cargar la página
 mostrarNombreModal();