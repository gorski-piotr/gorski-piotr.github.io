console.log('Odbieranie i wysyłanie danych');

// Opis metod protokołu HTTP (GET, POST, PUT, DELETE, OPTION) https://www.w3schools.com/tags/ref_httpmethods.asp


let formCreateUser = document.getElementById('create-user');
let btnGetRandomUser = document.getElementById('get-random-user');




// API do pobierania danych - https://akademia108.pl/api/ajax/get-random-user.php
// - method: GET


// wklejąjąc link do API w przeglądarce:
// - https://akademia108.pl/api/ajax/get-random-user.php
// dostaniemy JSON'a z użytkownikiem

// Receive JSON data => GET User
const getUser = () => {
    fetch(`https://akademia108.pl/api/ajax/get-random-user.php`, {

        // mode: 'no-cors', // ERRORS with no-cors, because only headers: HEAD, GET, POST are allowed - https://developer.mozilla.org/en-US/docs/Web/API/Request/mode
        mode: 'cors', // it is DEFAULT VALUE

        method: 'GET', // allowed
        // method: 'POST', // allowed by CORS, but NOT allowed by SERVER
        // method: 'PUT', // NOT allowed on server by CORS
      })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

btnGetRandomUser.addEventListener('click', getUser);





// API do wysyłania danych - https://akademia108.pl/api/ajax/post-user.php
// - method: POST
// - Content-type: application/json


// wklejąjąc link do API w przeglądarce:
// - https://akademia108.pl/api/ajax/post-user.php
// dostaniemy komunikat, że tylko zapytania POST są dozwolone pod tym adresem

// Send JSON data => POST User
const createUser = () => {
    
    let errors = [];

    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let occupation = document.getElementById('occupation');
    let company = document.getElementById('company');

    let errorsUl = document.getElementById('errors');
    errorsUl.innerHTML = '';
    let pMsg = document.getElementById('msg');
    pMsg.innerHTML = '';

    if (firstName.value.trim() === '') {
        errors.push('Podaj imie')
    }

    if (lastName.value.trim() === '') {
        errors.push('Podaj nazwisko')
    }

    if (occupation.value.trim() === '') {
        errors.push('Podaj zawód')
    }

    if (company.value.trim() === '') {
        errors.push('Podaj firmę')
    }

    if (errors.length > 0) {
        for (const error of errors) {
            let errorLi = document.createElement('li');
            errorLi.innerText = error;
            errorsUl.appendChild(errorLi)
        }

        return false;
    }

    let user = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        occupation: occupation.value.trim(),
        company: company.value.trim(),
    };


    fetch(`https://akademia108.pl/api/ajax/post-user.php`, {
        headers: {
            'Content-Type': 'application/json', // allowed
            // 'Content-Type': 'application/xml', // NOT allowed by SERVER
        },

        // mode: 'no-cors', // ERRORS with no-cors, because only headers: HEAD, GET, POST are allowed - https://developer.mozilla.org/en-US/docs/Web/API/Request/mode
        mode: 'cors', // it is DEFAULT VALUE

        method: 'POST', // allowed
        // method: 'PUT', // allowed by CORS, but NOT allowed by SERVER
        // method: 'DELETE', // NOT allowed on server by CORS

        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);

            if (!resJSON.errors) {
                // formCreateUser.reset();
                pMsg.innerText = resJSON.messages[0];
            }

            
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


formCreateUser.addEventListener('submit', createUser);