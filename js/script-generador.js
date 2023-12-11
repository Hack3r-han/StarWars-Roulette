// ********* Array de base *********
let nombresArray = ["Maxuel", "Alicia", "Jose", "Jander", "Yessi", "Anzuly", "Neimy", "Hannah",
   "Isaac", "David", "Paolo", "Alba", "Joaco", "Denisse", "Alfredo", "Marcela", "Laudy",
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

  // let listadoNombres = document.getElementById("listadoNombres");

  /* listadoNombres.innerHTML = "";

  nombresArray.forEach((name) => {
    let listItem = document.createElement("li");
    listItem.textContent = name;
    listadoNombres.appendChild(listItem);
  }); */


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

/* Modal */

function mostrarModal() {
  let modal = document.getElementById("miModal");
  modal.style.display = "block";
  placeName()
}


function chooseName() {
  let index = Math.floor(Math.random() * nombresArray.length);
  nombreElegido = nombresArray[index];
  return nombreElegido;
}

function placeName() {
  const container = document.querySelector(".contenido-modal");
  for (let i = 0; i < nombresArray.length; i++) {
    const warior = document.createElement("div");
    warior.className = "warior pulse";
    warior.innerHTML = `<h5 class="change-size">${chooseName()}</h5>`;
    container.appendChild(warior);
    container.appendChild

    const randomX = Math.floor(Math.random() * (window.innerWidth * .9));
    const randomY = Math.floor(Math.random() * (window.innerHeight * .9)) ;

    console.log(randomY);

    warior.style.position = "absolute";
    warior.style.left = `${randomX}px`;
    warior.style.top = `${randomY}px`;
    warior.style.borderRadius = "50%";
    warior.style.backgroundColor = "yellow"
  }
}

placeName();

function playRoulette() {
  let choice = chooseName();
  let h1 = document.createElement("h1");
  const container = document.querySelector(".contenido-modal");
  h1.textContent = choice;
  container.appendChild(h1);
  h1.className = "choice";
}

playRoulette();

const audio = new Audio("../sounds/keyboard.mp3");

const buttonSound = document.querySelector(".sound")
buttonSound.addEventListener("click", () => { audio.play();
  });
