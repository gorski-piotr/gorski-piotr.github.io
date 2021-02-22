// $(function() {
//     console.log("jQuery test");

//     //metoda get nie zamienila mi stringa na json?
//     $.get("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
//         console.log("jQuery data test");
//         console.log(data);
//         console.log(data.imie);
//         console.log(data.nazwisko);
//         console.log(data.zawod);
//         console.log(data.firma);
//     });

//     //metodagetJSON dziala git
//     $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
//         console.log("jQuery data test");
//         console.log(data);
//         console.log(data.imie);
//         console.log(data.nazwisko);
//         console.log(data.zawod);
//         console.log(data.firma);
//     });
// });

let btnDownloadData = document.getElementById("download-data");
let divDaneProgramisty = document.getElementById("dane-programisty");

const downloadData = () => {
    $(function() {
        $.get("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
            let jsonData = JSON.parse(data);
            console.log(jsonData);
            divDaneProgramisty.innerText = `Imie: ${jsonData.imie},\nNazwisko: ${jsonData.nazwisko},\nZawód: ${jsonData.zawod},\nFirma: ${jsonData.firma}.`
            //divDaneProgramisty.textContent = `Imie: ${data.imie},\nNazwisko: ${data.nazwisko},\nZawód: ${data.zawod},\nFirma: ${data.firma}.`
            //$("#dane-programisty").text(`Imie: ${data.imie},\nNazwisko: ${data.nazwisko},\nZawód: ${data.zawod},\nFirma: ${data.firma}.`);
            // document.getElementById("dane-programisty").innerText = `Imie: ${data.imie},\nNazwisko: ${data.nazwisko},\nZawód: ${data.zawod},\nFirma: ${data.firma}.`
        });
    });
}

btnDownloadData = document.addEventListener("click", downloadData);

//  document.getElementById("download-data").addEventListener("click", downloadData);


//BEZ UZYCIA ZMIENNYCH (NAJMNEJ KODU, NAJMNIEJ CZYTELNE):
// document.getElementById("download-data").addEventListener("click", function() {
//     $(function() {
//         $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
//             document.getElementById("dane-programisty").innerText = `Imie: ${data.imie},\nNazwisko: ${data.nazwisko},\nZawód: ${data.zawod},\nFirma: ${data.firma}.`
//         });
//     });
// });