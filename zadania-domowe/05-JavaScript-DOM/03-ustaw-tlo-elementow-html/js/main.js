console.log("hello");

let myButton = document.getElementById("changeBackground");

// myButton.onclick = setBackground;


//const setBackground = () => { ...... }
function setBackground() {
    let pierwszyParagraf = document.querySelector(".pierwszy");
    let drugiParagraf = document.querySelector(".drugi");
    
    pierwszyParagraf.classList.add("bg-red");
    drugiParagraf.classList.add("bg-yellow");


    // pierwszyParagraf.style.backgroundColor = "red";
    // drugiParagraf.style.backgroundColor = "yellow";
}

myButton.addEventListener('click', setBackground);
  
