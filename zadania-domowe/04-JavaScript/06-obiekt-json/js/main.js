let jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach( function (element, index)  {

console.log("Indeks pracownika: " + index + ". Imie: " + element.firstName + ", Nazwisko: " + element.lastName + ".");

});