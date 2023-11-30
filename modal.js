let names = [];
        function getName() { 
        let inputName = document.querySelector("#inputName");
        let name = inputName.value
        document.querySelector("h3").innerHTML = name;
        names.push(name)
            inputName.value = " "
            document.querySelector("#names").textContent = names   
        }


        function deleteName(){
            let inputName = document.querySelector("#inputName");
            let name1 = inputName.value;
            const index = names.indexOf(name1);
            const x = names.splice(index, 1)
            inputName.value = " "
            document.querySelector("#names").textContent = names             
        }
        document.querySelector("#add").addEventListener("click", getName)
        document.querySelector("#delete").addEventListener("click", deleteName)
