console.log("hello");

let myButton = document.getElementById("changeBackground");

// myButton.onclick = setBackground;


//const setBackground = () => { ...... }
function setBackground() {
    let pierwszyParagraf = document.querySelector(".pierwszy");
    let drugiParagraf = document.querySelector(".drugi");
    
    pierwszyParagraf.classList.toggle("bg-red");
    drugiParagraf.classList.add("bg-yellow");



    // pierwszyParagraf.classList.add("bg-red");
    // drugiParagraf.classList.add("bg-yellow");


    // pierwszyParagraf.style.backgroundColor = "red";
    // drugiParagraf.style.backgroundColor = "yellow";
}


function setFontSize() {
    let pierwszyParagraf = document.querySelector(".pierwszy");
    let drugiParagraf = document.querySelector(".drugi");
    
    pierwszyParagraf.style.fontSize = "2em";
    drugiParagraf.style.fontSize = "2em";



    // pierwszyParagraf.classList.add("bg-red");
    // drugiParagraf.classList.add("bg-yellow");


    // pierwszyParagraf.style.backgroundColor = "red";
    // drugiParagraf.style.backgroundColor = "yellow";
}


// myButton.onclick = setFontSize;
// myButton.onclick = setBackground;

myButton.addEventListener('click', setFontSize);
myButton.addEventListener('click', setBackground);

let object = {
    name: "imie",
}

object.name = "Piotr";
object.name = "Lukasz";