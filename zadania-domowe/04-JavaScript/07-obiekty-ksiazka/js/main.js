class Ksiazka {
    constructor (tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    czyPrzeczytana() {
        if (this.przeczytana === true) {
            return "została przeczytana"
        } else {
            return "nie została przeczytana"
        }
    } 

    opiszKsiazke() {
        return "Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i " + this.czyPrzeczytana();
    }
}

let ksiazka1 = new Ksiazka("Wiedzmin", "Andrzej Sapkowski", false);
/* console.log(ksiazka1.opiszKsiazke()); */

let ksiazka2 = new Ksiazka("Harry Potter i komnata tajemnic", "J. K. Rowling", false);
/* ksiazka2.opiszKsiazke(); */

let ksiazka3 = new Ksiazka("Harry Potter i kamien filozoficzny", "J. K. Rowling", true);
/* ksiazka3.opiszKsiazke(); */


let mojeKsiazki = [ksiazka1, ksiazka2, ksiazka3];

function iloscPrzeczytanych(tablicaKsiazek) {
    let liczbaPrzeczytanych = 0;
    tablicaKsiazek.forEach( function(element) {
        console.log(element.opiszKsiazke());

        if (element.przeczytana === true) {
            liczbaPrzeczytanych += 1;
        }
    }) 
       
    return "Liczba przeczytanych ksiazek: " + liczbaPrzeczytanych;
}

console.log(iloscPrzeczytanych(mojeKsiazki));