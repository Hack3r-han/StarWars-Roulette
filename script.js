// Function to add a name to the list
  function addName() { 
    const nameInput = document.getElementById('nameInput'); 
    const nameList = document.getElementById('nameList'); 
  
    if (nameInput.value !== '') { 
      const listItem = document.createElement('li');
      listItem.textContent = nameInput.value; 
      listItem.addEventListener('click', function() { 
        this.parentNode.removeChild(this); 
        saveNames(); 
      });
      nameList.appendChild(listItem); 
      nameInput.value = ''; 
  
      saveNames(); 
    } else {
      alert('Por favor ingrese un nombre.');
    }
  }
  
  // Function to save names to localStorage
  function saveNames() {
    const nameList = document.getElementById('nameList');
    const names = [];
  
    nameList.childNodes.forEach(node => {
      if (node.textContent.trim() !== '') {
        names.push(node.textContent.trim());
      }
    });
  
    localStorage.setItem('userNames', JSON.stringify(names));
  }
  
  // Function to pick a random name from  the list in localStorage
  function pickRandomName() {
    const savedNames = localStorage.getItem('userNames');
    const randomResult = document.getElementById('randomResult');
  
    if (savedNames) {
      const namesArray = JSON.parse(savedNames);
  
      if (namesArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * namesArray.length);
        const randomName = namesArray[randomIndex];
  
        // Remove the selected name from the list
        namesArray.splice(randomIndex, 1);
  
        // Update localStorage with the modified list
        localStorage.setItem('userNames', JSON.stringify(namesArray));

        // Update the visible list, remove the selected name
        const listItems = nameList.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
          if (listItems[i].textContent === randomName) {
            nameList.removeChild(listItems[i]);
            break;
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
    