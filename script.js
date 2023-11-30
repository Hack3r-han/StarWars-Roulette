// Función para agregar un nombre a la lista

  function addName() { //línea 12 del HTML - la función se activa al hacer clic en el botón Agregar
    const nameInput = document.getElementById('nameInput'); //línea 11 del HTML
    const nameList = document.getElementById('nameList'); //línea 13 del HTML
  
    if (nameInput.value !== '') { //comprueba que el valor de entrada no esté vacío
      const listItem = document.createElement('li'); //crea un nuevo elemento de lista, una variable vacía para contener los datos
      listItem.textContent = nameInput.value; //establece el contenido de la variable vacía con el nombre ingresado (input)
      listItem.addEventListener('click', function() { 
        this.parentNode.removeChild(this); //Eliminar el listaElemento si se hace clic
        saveNames(); //Guardar la lista actualizada en localStorage. Ver la función guardarNombres() a continuación
      });
      nameList.appendChild(listItem); //agregar el listaElemento creada a la lista visible
      nameInput.value = ''; //borrar el campo de entrada después de agregar un nombre
  
      saveNames(); //Guardar la lista actualizada en localStorage inmediatamente después de agregar un nombre
    } else {
      alert('Por favor ingrese un nombre.');
    }
  }
  
  //Función para guardar nombres en localStorage desde nameList
  function saveNames() {
    const nameList = document.getElementById('nameList');  //línea 15 del HTML
    const names = []; //Inicializar un array vacío para almacenar los nombres
  
    nameList.childNodes.forEach(node => { //iterar a través de elementos en nameList
      if (node.textContent.trim() !== '') {
        names.push(node.textContent.trim()); //trims los elementos y los agrega al array
      }
    });
  
    localStorage.setItem('userNames', JSON.stringify(names)); //guardar el array en localStorage con el llave userNames
  }
  
  //Función para elegir un nombre aleatorio de la lista en localStorage
  function pickRandomName() {
    const savedNames = localStorage.getItem('userNames'); //recuperar elementos de localStorage
    const randomResult = document.getElementById('randomResult'); //línea 15 del HTML
  
    if (savedNames) {
      const namesArray = JSON.parse(savedNames); //parse los nombres guardados en un array
  
      if (namesArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * namesArray.length);
        const randomName = namesArray[randomIndex];
  
        //Eliminar el nombre seleccionado de la lista
        namesArray.splice(randomIndex, 1);
  
        //Actualizar localStorage con la lista modificada
        localStorage.setItem('userNames', JSON.stringify(namesArray));

        //Actualizar la lista visible eliminando el nombre seleccionado
        const listItems = nameList.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
          if (listItems[i].textContent === randomName) {
            nameList.removeChild(listItems[i]);
            break; //stop después de eliminar la primera aparición (para manejar duplicados)
          }
      }
  
        randomResult.textContent = `${randomName}, eres el Elegido.`;
      } else {
        randomResult.textContent = 'No quedan nombres.';
      }
    } else {
      randomResult.textContent = 'No hay nombres guardados.';
    }
  }