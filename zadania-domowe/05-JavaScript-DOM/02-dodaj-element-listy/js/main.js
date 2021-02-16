let button = document.querySelector("button");
let list = document.getElementById("items");

let items = document.getElementsByClassName("item");
let itemNumber = items.length + 1;

const addNewElement = () => {

    let liElement = document.createElement("li");
    liElement.innerText = "Item " + itemNumber;
    liElement.classList.add('item');
    list.appendChild(liElement);
    itemNumber += 1;
}

button.addEventListener("click", addNewElement);

