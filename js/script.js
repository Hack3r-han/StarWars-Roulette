<<<<<<< HEAD
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
=======
//     *********      Función para agregar un nombre a la lista       **********

  function agregarNombre() { //línea 12 del HTML - la función se activa al hacer clic en el botón Agregar
    const nombreInput = document.getElementById('nombreInput'); //línea 11 del HTML
    const nombreLista = document.getElementById('nombreLista'); //línea 13 del HTML
  
    if (nombreInput.value !== '') { //comprueba que el valor de entrada no esté vacío
      const listaElemento = document.createElement('li'); //crea un nuevo elemento de lista, una variable vacía para contener los datos
      listaElemento.textContent = nombreInput.value; //establece el contenido de la variable vacía con el nombre ingresado (input)
      listaElemento.addEventListener('click', function() { 
        this.parentNode.removeChild(this); //Eliminar el listaElemento si se hace clic
        guardarNombres(); //Guardar la lista actualizada en localStorage. Ver la función guardarNombres() a continuación
      });
      nombreLista.appendChild(listaElemento); //agregar el listaElemento creada a la lista visible
      nombreInput.value = ''; //borrar el campo de entrada después de agregar un nombre
  
      guardarNombres(); //Guardar la lista actualizada en localStorage inmediatamente después de agregar un nombre
    } else {
      alert('Por favor ingrese un nombre.');
    }
  }

  
//    *********      Función para guardar nombres en localStorage desde nombreLista     *********      

  function guardarNombres() {
    const nombreLista = document.getElementById('nombreLista');  //línea 15 del HTML
    const nombres = []; //Inicializar un array vacío para almacenar los nombres
  
    nombreLista.childNodes.forEach(node => { //iterar a través de elementos en nombreLista
      if (node.textContent.trim() !== '') {
        nombres.push(node.textContent.trim()); //trims los elementos y los agrega al array
      }
    });
  
    localStorage.setItem('nombresUsuarios', JSON.stringify(nombres)); //guardar el array en localStorage con el llave nombresUsuarios
  }
  
  
//     *********      Función para elegir un nombre aleatorio de la lista en localStorage     *********      

  function elegirNombreRandom() {
    const nombresGuardados = localStorage.getItem('nombresUsuarios'); //recuperar elementos de localStorage
    const randomResultado = document.getElementById('randomResultado'); //línea 15 del HTML - obtener el elemento donde se mostrará el resultado del nombre aleatorio

    //EL CODIGO QUE NO FUNCIONA - para establecer una lista de nombres predeterminados

    const nombreLista = document.getElementById('nombreLista');

    if (!nombresGuardados) { //Comprobar si NO hay nombres guardados en localStorage
       const predeterminedNames = ["Max","Alicia","Jose","Mercedes","Jander","Yessi","Anzu","Neimy","Hanna","Isaac","Juanjo",
       "David","Paolo","Alba","Joaco","Laudy","Denisse","Alfredo","Marcela","Victor","Yady","Alvaro","Roxana","Elena"];
  
       localStorage.setItem('nombresUsuarios', JSON.stringify(predeterminedNames));
  
       predeterminedNames.forEach(nombre => {
         const listaElemento = document.createElement('li');
         listaElemento.textContent = nombre;
         listaElemento.addEventListener('click', function() {
           nombreLista.removeChild(listaElemento);
           guardarNombres();
        });
         nombreLista.appendChild(listaElemento);
       });
      } else { //si hay nombres guardados en localStorage

    //FINAL DE CODIGO QUE NO FUNCIONA


      if (nombresGuardados) { 
      const nombresArray = JSON.parse(nombresGuardados); //parse los nombres guardados en un array
  
      if (nombresArray.length > 0) {
        const randomIndice = Math.floor(Math.random() * nombresArray.length);
        const randomNombre = nombresArray[randomIndice];
  
        //Eliminar el nombre seleccionado de la lista
        nombresArray.splice(randomIndice, 1);
  
        //Actualizar localStorage con la lista modificada
        localStorage.setItem('nombresUsuarios', JSON.stringify(nombresArray));

        //Actualizar la lista visible eliminando el nombre seleccionado
        const listaElementos = nombreLista.getElementsByTagName('li');
        for (let i = 0; i < listaElementos.length; i++) {
          if (listaElementos[i].textContent === randomNombre) {
            nombreLista.removeChild(listaElementos[i]);
            break; //stop después de eliminar la primera aparición (para manejar duplicados)
          }
      }
  
        randomResultado.textContent = `${randomNombre}, eres el Elegido.`;
      } else {
        randomResultado.textContent = 'No quedan nombres.';
      }
    } else {
      randomResultado.textContent = 'No hay nombres guardados.';
    }
  }
}
>>>>>>> Dev-Laudy
