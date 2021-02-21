const addDataToWebsite = (resJSON) => {
    resJSON.forEach( function(element) {
        console.log(element);
        let pId = document.createElement("p");
        let pName = document.createElement("p");
        let pWebsite = document.createElement("p");

        pId.innerText = "User ID: " + element.id;
        pName.innerText = "User Name: " + element.name;
        pWebsite.innerText = "User ID: " + element.website + "\n--------";

        document.body.appendChild(pId);
        document.body.appendChild(pName);
        document.body.appendChild(pWebsite);
    })
}

const getData = () => {
    fetch(`https://akademia108.pl/api/ajax/get-users.php`, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
            addDataToWebsite(resJSON);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

const scrollToEndOfPage = () => {
    console.log("scrolled");
    if ((document.documentElement.scrollTop + document.documentElement.clientHeight) >= document.documentElement.scrollHeight) {
        console.log("scrolled to the end");
        getData();
    }
}

window.addEventListener("scroll", scrollToEndOfPage);