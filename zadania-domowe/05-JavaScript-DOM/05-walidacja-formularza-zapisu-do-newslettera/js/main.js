let newsletterForm = document.getElementById("newsletter-form");

let allAgreeCheckbox = document.getElementById("all-agree");

let firstAgree = document.getElementById("first-agree");
let secondAgree = document.getElementById("second-agree");

const validate = (event) => {

    let fullName = document.getElementById("full-name");
    let eMail = document.getElementById("mail");
    let warningsList = document.getElementById("warnings");
    

    warningsList.innerHTML = "";

    if (fullName.value.trim() === "") {
        console.log("Musisz podac Imie");
        let liElement = document.createElement("li");
        warningsList.appendChild(liElement);
        liElement.innerText = "Podaj imie!";
        event.preventDefault();
    } 
    
    if (eMail.value.trim() === "") {
        console.log("Musisz podac e-mail");
        let liElement = document.createElement("li");
        warningsList.appendChild(liElement);
        liElement.innerText = "Podaj e-mail!";
    }
    
    if (eMail.value !== "" && eMail.value.includes("@") === false) {
        console.log("email musi zawierac @");
        let liElement = document.createElement("li");
        warningsList.appendChild(liElement);
        liElement.innerText = "E-mail musi zawierac @ !";
    }
    
    if (!firstAgree.checked) {
        console.log("musisz wyrazic zgode pierwsza!");
        let liElement = document.createElement("li");
        warningsList.appendChild(liElement);
        liElement.innerText = "Musisz wyrazic zgode pierwsza!";
    }
    
    if (fullName.value !== "" && eMail.value.includes("@") && firstAgree.checked) {
        console.log("submitted");
        let liElement = document.createElement("li");
        warningsList.appendChild(liElement);
        liElement.innerText = "Wyslano!";
    } else {
        event.preventDefault();
        console.log("Nie wyslano!")
    }
}

newsletterForm.addEventListener("submit", validate);
allAgreeCheckbox.addEventListener("change", function() {
    if (this.checked) {
        firstAgree.checked = true;
        secondAgree.checked = true;

        firstAgree.disabled = true;
        secondAgree.disabled = true;
    } else {
        firstAgree.checked = false;
        secondAgree.checked = false;

        firstAgree.disabled = false;
        secondAgree.disabled = false;
    }
    
});

firstAgree.addEventListener("change", function() {
    if (this.checked && secondAgree.checked) {
        allAgreeCheckbox.checked = true;

        firstAgree.disabled = true;
        secondAgree.disabled = true;
    }

});

secondAgree.addEventListener("change", function() {
    if (this.checked && firstAgree.checked) {
        allAgreeCheckbox.checked = true;

        firstAgree.disabled = true;
        secondAgree.disabled = true;
    }
});