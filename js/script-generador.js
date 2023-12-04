// ********* Array de base *********
let nombresArray = ["Maxwell", "Alicia", "Jose", "Mercedes", "Jander", "Yessi", "Anzuly", "Neimy", "Hanna",
  "Isaac", "Juanjo", "David", "Paolo", "Alba", "Joaco", "Alberto", "Denisse", "Alfredo", "Marcela", "Laudy",
  "Victor", "Yady", "Alvaro", "Roxana", "Elena",
];

// ********* Función para elegir nombre aleatorio **********
function elegirNombreRandom() {
  let resultado = document.getElementById("randomResultado");
  let nombreAleatorio = obtenerNombreAleatorio(nombresArray);
  resultado.textContent = nombreAleatorio;
}

// ********* Función que toma array como argumento y devuelve elemento aleatorio **********
function obtenerNombreAleatorio(array) {
  let indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

// ********* Función para el modal **********
window.onload = function () {
  let modal = document.getElementById("miModal");
  const btnCerrar = document.getElementsByClassName("cerrar")[0];

  btnCerrar.onclick = function () {
    modal = document.getElementById("miModal");
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

// ********* Función para mostrar el listado completo de nombresArray **********
function mostrarNombreModal() {
  let modal = document.getElementById("miModal");
  modal.style.display = "block";
  let listadoNombres = document.getElementById("listadoNombres");

  listadoNombres.innerHTML = "";

  nombresArray.forEach((name) => {
    let listItem = document.createElement("li");
    listItem.textContent = name;
    listadoNombres.appendChild(listItem);
  });
}

// ********* Función para agregar un elemento al array **********
function agregarNombre() {
  let addElementInput = document.getElementById("nombreInput");
  let newName = addElementInput.value.trim();

  if (newName !== "") {
    nombresArray.push(newName);
    addElementInput.value = "";
    mostrarNombreModal();
  }
}

// ********* Función para eliminar un elemento del array **********
function eliminarNombre() {
  let removeElementInput = document.getElementById("nombreEliminar");
  let nameToRemove = removeElementInput.value.trim();

  if (nameToRemove !== "") {
    let index = nombresArray.indexOf(nameToRemove);

    if (index !== -1) {
      nombresArray.splice(index, 1);
      removeElementInput.value = "";
      mostrarNombreModal();
    } else {
      alert("El nombre no existe en el listado");
    }
  }
}

// ********* Nueva función para reiniciar con sonido asociada al clic del botón img-btn-reiniciar *********
document.querySelector('.img-btn-reiniciar').addEventListener('click', function() {
  // Resto del código para reiniciar...

  // Reproducir el sonido al reiniciar
  let sound = document.getElementById("sound");
  sound.play();
});
