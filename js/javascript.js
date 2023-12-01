let nombres = ["Max", "Alicia","Jose","Mercedes","Jander","Yessi","Anzu", "Neimy","Hanna","Isaac", "Juanjo","David","Paolo","Alba", "Joaco","Alberto","Denisse", "Alfredo","Alfredo", "Marcela","Laudy", "Victor","Yady","Alvaro", "Roxana","Elena"];

function chooseRandomName() {
    let randomIndex = Math.floor(Math.random() * nombres.length);
    let randomName = nombres[randomIndex];
    displayRandomName(randomName);
}

function displayRandomName(nombre) {
    let nameDisplay = document.getElementById('nameDisplay');
    nameDisplay.innerHTML = `<p> Nombre Elegido: <strong> ${nombre} </strong> </p>`;
}