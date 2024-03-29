// ********* Array de base *********
let nombresArray = ["Maxuel", "Alicia", "Jose", "Jander", "Yessi", "Anzuly", "Neymi", "Hannah",
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

// ********* Función para agregar nombre y reproducir sonido Yes Master **********

function agregarNombre() {
  let addElementInput = document.getElementById("nombreInput");
  let newName = addElementInput.value.trim();

  if (newName !== "") {
    nombresArray.push(newName);
    addElementInput.value = "";
    reproducirSonido('audioYesMaster');
  }
}

// ********* Función para eliminar nombre y reproducir sonido Chewbaca **********
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

// ********* Función para redireccionar a la página de inicio **********
function redireccionarInicio() {
  window.location.href = "/index.html";
}

// SONIDOS

// ********* Función general para reproducir sonidos **********
function reproducirSonido(idAudio) {
  let audio = document.getElementById(idAudio);
  audio.play();
}

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

// ********* Agrega el elemento de audio para Yoda *********
function playYodaAndRedirect() {
  let starWarsTheme = document.getElementById('starWarsTheme');
  starWarsTheme.pause();
  
  reproducirSonido('audioYoda');
  
  setTimeout(function() {
    window.location.href = "generador-index.html";
  }, 3000); 
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

    const randomX = Math.floor(Math.random() * (innerWidth));
    const randomY = Math.floor(Math.random() * (innerHeight));

    console.log(randomY);

    warior.style.position = "absolute";
    warior.style.left = `${randomX /1.1}px`;
    warior.style.top = `${randomY /1.1}px`;
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
