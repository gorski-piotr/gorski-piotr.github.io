

//wariant 1 - metoda get()
let btnGetData = document.getElementById("btn-get-data-get");
btnGetData.addEventListener("click", function() {
    $(function() {
        $.get("https://akademia108.pl/api/ajax/get-post.php", function(data) {
            console.log(data);
            let pElementId = document.createElement("p");
            pElementId.innerText = "id: " + data.id;
            document.body.appendChild(pElementId);

            let pElementUserId = document.createElement("p");
            pElementUserId.innerText = "user id: " + data.userId;
            document.body.appendChild(pElementUserId);

            let pElementTitle = document.createElement("p");
            pElementTitle.innerText = "Title: " + data.title;
            document.body.appendChild(pElementTitle);

            let pElementBody = document.createElement("p");
            pElementBody.innerText = "Body: " + data.body;
            document.body.appendChild(pElementBody);

            let hrElement = document.createElement("hr");
            document.body.appendChild(hrElement);
        })
    });
});


//wariant 2 - metoda getJSON()
let btnGetDataGetJSON = document.getElementById("btn-get-data-getjson");
btnGetDataGetJSON.addEventListener("click", function() {
    $(function() {
        $.getJSON("https://akademia108.pl/api/ajax/get-post.php", function(dataJson) {
            console.log(dataJson);
            let pElementIdJson = document.createElement("p");
            pElementIdJson.innerText = "id: " + dataJson.id;
            document.body.appendChild(pElementIdJson);

            let pElementUserId = document.createElement("p");
            pElementUserId.innerText = "user id: " + dataJson.userId;
            document.body.appendChild(pElementUserId);

            let pElementTitle = document.createElement("p");
            pElementTitle.innerText = "Title: " + dataJson.title;
            document.body.appendChild(pElementTitle);

            let pElementBody = document.createElement("p");
            pElementBody.innerText = "Body: " + dataJson.body;
            document.body.appendChild(pElementBody);

            let hrElement = document.createElement("hr");
            document.body.appendChild(hrElement);
        })
    });
});
