let btnGetData = document.getElementById("btn-get-data");
let divPrintData = document.getElementById("div-print-data");

const getData = () => {
    console.log("getData test")
    fetch(`https://akademia108.pl/api/ajax/get-post.php`, {
        mode: 'cors', // it is DEFAULT VALUE
        method: 'GET', // allowed
        // method: 'POST', // allowed by CORS, but NOT allowed by SERVER
        // method: 'PUT', // NOT allowed on server by CORS
      })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
            divPrintData.innerText = 
            "userID = " + resJSON.userId + "\n" +
            "id = " + resJSON.id + "\n" +
            "title = " + resJSON.title + "\n" +
            "body = " + resJSON.body
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("blad");
        });
}

btnGetData = document.addEventListener("click", getData);