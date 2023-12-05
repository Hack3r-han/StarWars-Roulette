// ********* Array de base *********
let nombresArray = ["Maxwell", "Alicia", "Jose", "Mercedes", "Jander", "Yessi", "Anzuly", "Neimy", "Hanna",
  "Isaac", "Juanjo", "David", "Paolo", "Alba", "Joaco", "Alberto", "Denisse", "Alfredo", "Marcela", "Laudy",
  "Victor", "Yady", "Alvaro", "Roxana", "Elena",
];

// ********* Función para elegir nombre aleatorio y reproducir sonido R2D2 **********
function elegirNombreRandom() {
  let resultado = document.getElementById("randomResultado");
  let nombreAleatorio = obtenerNombreAleatorio(nombresArray);
  resultado.textContent = nombreAleatorio;
  reproducirSonido('audioR2D2');
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
    reproducirSonido('audioYesMaster');
  }
}

// ********* Función para eliminar un elemento del array y reproducir sonido Chewbaca **********
function eliminarNombre() {
  let removeElementInput = document.getElementById("nombreEliminar");
  let nameToRemove = removeElementInput.value.trim();

  if (nameToRemove !== "") {
    let index = nombresArray.indexOf(nameToRemove);

    if (index !== -1) {
      nombresArray.splice(index, 1);
      removeElementInput.value = "";
      reproducirSonido('audioChewbaca');
    } else {
      alert("El nombre no existe en el listado");
    }
  }
}

// ********* Función para reproducir sonido R2D2 **********
function reproducirSonido(idAudio) {
  let audio = document.getElementById(idAudio);
  audio.play();
}

// ********* Función para reproducir sonido Pistol al hacer clic en el botón de reinicio **********
function reproducirSonidoPistolDesdeBoton() {
  reproducirSonido('audioPistol');
}

// ********* Función para redireccionar a la página de inicio **********
function redireccionarInicio() {
  window.location.href = "/index.html";
}

// ********* Agregar más funciones según sea necesario *********

// ********* Agrega el elemento de audio para R2D2 *********
function reproducirSonidoR2D2() {
  let audioR2D2 = document.getElementById('audioR2D2');
  audioR2D2.play();
}

// ********* Agrega el elemento de audio para Yes Master *********
function reproducirSonidoYesMaster() {
  let audioYesMaster = document.getElementById('audioYesMaster');
  audioYesMaster.play();
}

// ********* Agrega el elemento de audio para Chewbaca *********
function reproducirSonidoChewbaca() {
  let audioChewbaca = document.getElementById('audioChewbaca');
  audioChewbaca.play();
}

// ********* Agrega el elemento de audio para Pistol *********
function reproducirSonidoPistol() {
  let audioPistol = document.getElementById('audioPistol');
  audioPistol.play();
}


/* JavaScript para detener la reproducción del audio theme después de que se complete */
document.getElementById('starWarsTheme').addEventListener('ended', function() {
  this.currentTime = 0; // Reinicia el tiempo de reproducción
  this.pause(); // Pausa la reproducción
});
