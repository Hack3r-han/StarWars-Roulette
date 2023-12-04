const wariors = [
    "David",
    "Laudy",
    "Hannah",
    "Paolo",
    "Alba",
    "Roxana",
    "Alvaro",
    "Alfredo",
    "Maxuel",
    "Anzuly",
    "Neymi",
    "Jose",
    "Juaco",
    "Isaac",
    "Yessenia",
    "Alicia",
    "Victor",
    "Viviana",
    "Raul",
    "Jander",
    "Denisse",
    "Marcela",
    "Elena",
  ];

  function chooseWarior() {
    let index = Math.floor(Math.random() * wariors.length);
    nameWarior = wariors[index];
    return nameWarior;
  }

  function placeWariors() {
    const container = document.querySelector(".container");
    for (let i = 0; i < wariors.length; i++) {
      const warior = document.createElement("div");
      warior.className = "warior pulse star";
      warior.innerHTML = `<p>${chooseWarior()}</p>`;
      container.appendChild(warior);

      const randomX = Math.floor(Math.random() * (window.innerWidth * 0.7));
      const randomY = Math.floor(
        Math.random() * (window.innerHeight * 0.7)
      );

      console.log(randomY);

      warior.style.position = "absolute";
      warior.style.left = `${randomX}px`;
      warior.style.top = `${randomY}px`;
      warior.style.borderRadius = "50%";
    }
  }

  placeWariors();

  function playRoulette() {
    let choice = chooseWarior();
    let h1 = document.createElement("h1");
    const container = document.querySelector(".container");
    h1.textContent = choice;
    container.appendChild(h1);
    h1.className = "choice";
  }
  

  playRoulette();

  window.onload = placeWariors;

