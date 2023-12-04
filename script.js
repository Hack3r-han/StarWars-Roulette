// Lista de participantes
var participantes = ["Nombre1", "Nombre2", "Nombre3", "Nombre4", "Nombre5", "Nombre6", "Nombre7", "Nombre8", "Nombre9", "Nombre10",
                     "Nombre11", "Nombre12", "Nombre13", "Nombre14", "Nombre15", "Nombre16", "Nombre17", "Nombre18", "Nombre19", "Nombre20",
                     "Nombre21", "Nombre22", "Nombre23", "Nombre24", "Nombre25"];

// Función para girar la tragaperras
function girarTragaperras() {
    if (participantes.length > 0) {
        // Reproducir el sonido al girar la tragaperras
        var spinSound = document.getElementById("spinSound");
        spinSound.play();

        var resultado = obtenerNombreAleatorio();
        mostrarResultado(resultado);
        animarReel();
        actualizarListaEliminar();
        colocarReelAleatoriamente();
    } else {
        mostrarResultado("No quedan más participantes");
    }
}

// Función para obtener un nombre aleatorio y eliminarlo de la lista
function obtenerNombreAleatorio() {
    var index = Math.floor(Math.random() * participantes.length);
    var nombreSeleccionado = participantes[index];
    participantes.splice(index, 1); // Eliminar el nombre seleccionado de la lista
    return nombreSeleccionado;
}

// Función para agregar un nuevo nombre a la lista
function agregarNombre() {
    var nuevoNombre = document.getElementById("nuevoNombre").value;
    if (nuevoNombre.trim() !== "") {
        participantes.push(nuevoNombre);
        actualizarListaEliminar();
        document.getElementById("nuevoNombre").value = ""; // Limpiar el campo de entrada

        // Reproducir el sonido al agregar un nombre
        var yesMasterSound = new Audio("/sounds/yesmaster.mp3");
        yesMasterSound.play();
    }
}

// Función para eliminar un nombre de la lista
function eliminarNombre() {
    var selectEliminar = document.getElementById("eliminarNombre");
    var nombreEliminar = selectEliminar.value;

    if (nombreEliminar) {
        participantes = participantes.filter(nombre => nombre !== nombreEliminar);
        actualizarListaEliminar();

        // Reproducir el sonido al eliminar un nombre
        var deleteSound = document.getElementById("deleteSound");
        deleteSound.play();
    }
}

// Función para actualizar las opciones del select para eliminar nombres
function actualizarListaEliminar() {
    var selectEliminar = document.getElementById("eliminarNombre");
    selectEliminar.innerHTML = ""; // Limpiar las opciones existentes

    participantes.forEach(nombre => {
        var option = document.createElement("option");
        option.text = nombre;
        selectEliminar.add(option);
    });
}

// Función para mostrar el resultado en la interfaz y abrir la ventana modal
function mostrarResultado(resultado) {
    document.getElementById("result").innerHTML = resultado;
    abrirModal("Enhorabuena, has sido seleccionado\n" + resultado);
}

// Función para abrir la ventana modal
function abrirModal(message) {
    var modal = document.getElementById("modal");
    var modalMessage = document.getElementById("modal-message");

    modalMessage.innerHTML = message;
    modal.style.display = "block";
}

// Función para cerrar la ventana modal
function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Función para animar el carril de la tragaperras limitándolo al 70% de la pantalla
function animarReel() {
    var reel = document.getElementById("reel");

    // Limpiar la animación anterior para que siempre se realice la animación
    reel.style.animation = "none";
    void reel.offsetWidth;
    reel.style.animation = "spinReel 1s ease-out";

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Calcular posiciones aleatorias dentro del 70% de la pantalla
    var randomLeft = Math.floor(Math.random() * (windowWidth * 0.7 - reel.offsetWidth));
    var randomTop = Math.floor(Math.random() * (windowHeight * 0.7 - reel.offsetHeight));

    // Aplicar la animación al estilo del reel
    reel.style.left = randomLeft + "px";
    reel.style.top = randomTop + "px";
}

// Función para colocar el reel aleatoriamente
function colocarReelAleatoriamente() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var reel = document.getElementById("reel");

    // Calcular posiciones aleatorias
    var randomLeft = Math.floor(Math.random() * (windowWidth - reel.offsetWidth));
    var randomTop = Math.floor(Math.random() * (windowHeight - reel.offsetHeight));

    // Aplicar las posiciones al estilo del reel
    reel.style.left = randomLeft + "px";
    reel.style.top = randomTop + "px";
}

// Función para resetear la columna del reel
function resetTragaperras() {
    participantes = ["Nombre1", "Nombre2", "Nombre3", "Nombre4", "Nombre5", "Nombre6", "Nombre7", "Nombre8", "Nombre9", "Nombre10",
                     "Nombre11", "Nombre12", "Nombre13", "Nombre14", "Nombre15", "Nombre16", "Nombre17", "Nombre18", "Nombre19", "Nombre20",
                     "Nombre21", "Nombre22", "Nombre23", "Nombre24", "Nombre25"];
    actualizarListaEliminar();
    cerrarModal();
    document.getElementById("result").innerHTML = "";

    // Reproducir el sonido al hacer clic en el botón de reset
    var resetSound = document.getElementById("resetSound");
    resetSound.play();

    // Detener la animación del reel
    var reel = document.getElementById("reel");
    reel.style.animation = "none";
    void reel.offsetWidth;
    reel.style.animation = null;

    // Colocar el reel en su posición original sin animación
    reel.style.transition = "none";
    reel.style.left = "auto";
    reel.style.top = "auto";
    void reel.offsetWidth; // Triggers reflow
    reel.style.transition = null;
}

// Inicializar la lista de eliminar al cargar la página
actualizarListaEliminar();

