        const names = [];
        function getName() { 
        let inputName = document.querySelector("#inputName");
        let name = inputName.value
        document.querySelector("h4").innerHTML = name;
        names.push(name)
            inputName.value = " "
            document.querySelector("#names").textContent = names  
            console.log(names.indexOf(name)) 
            localStorage.setItem( "array", names)
        }


        function deleteName(){
            let inputName = document.querySelector("#inputName");
            let name = inputName.value;
            console.log(names)
            console.log(name)
            let index = names.indexOf(name)
            console.log(index)
            let x = names.splice(index, 1)

            document.querySelector("#names").textContent = names
            inputName.value = " "             
        }
        document.querySelector("#add").addEventListener("click", getName)
        document.querySelector("#delete").addEventListener("click", deleteName)

                // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
        modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }