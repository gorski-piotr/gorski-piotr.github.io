let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let olElement = document.createElement('ol');



let body = document.querySelector('body');
body.insertBefore(olElement, body.firstElementChild);



for (let i=0; i<cities.length; i++) {
    let liElement = document.createElement('li');
    let txtNode = document.createTextNode(cities[i]);
    liElement.classList.add('city');
    liElement.appendChild(txtNode);
    olElement.appendChild(liElement);
}

// cities.forEach( function(element) {
//     let liElement = document.createElement('li');
//     let txtNode = document.createTextNode(element);
//     liElement.appendChild(txtNode);
//     liElement.classList.add('city');
//     olElement.appendChild(liElement);
// });

//innertext linie 21, 22

//for ... of ...


console.log(olElement);