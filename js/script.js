// Función para agregar un nombre a la lista

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
  
//Función para guardar nombres en localStorage desde nombreLista

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
  
//Función para elegir un nombre aleatorio de la lista en localStorage

  function elegirNombreRandom() {
    const nombresGuardados = localStorage.getItem('nombresUsuarios'); //recuperar elementos de localStorage
    const randomResultado = document.getElementById('randomResultado'); //línea 15 del HTML - obtener el elemento donde se mostrará el resultado del nombre aleatorio

    //EL CODIGO QUE NO FUNCIONA - para establecer una lista de nombres predeterminados

    const nombreLista = document.getElementById('nombreLista');

    if (!nombresGuardados) { //Comprobar si NO hay nombres guardados en localStorage
       const predeterminedNames = ["Paolo", "Laudy", "Alba", "Hannah", "David"];
  
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
