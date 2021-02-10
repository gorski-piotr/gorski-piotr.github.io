//********** MOJE ROZWIAZNIE *************/


//ITERACYJNIE

let n = 7;

function entyElementIteracyjnie(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else if (n > 2) {
        let a = 1;
        let b = 1;
        let c = 0;

        for (let i = 3; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}

console.log("Iteracyjnie element nr " + n + " ciągu Fibonacciego wynosi: " + entyElementIteracyjnie(n));



//REKURENCYJNIE

function entyElementIteracyjnie(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else if (n >= 2) {
        return entyElementIteracyjnie(n - 1) + entyElementIteracyjnie(n-2);
    }
} 

console.log("Rekurencyjnie element nr " + n + " ciągu Fibonacciego wynosi: " + entyElementIteracyjnie(n));







// ********* PRZYKŁADOWE ROZWIĄZANIA Z INTERNETU ******************* //

//https://pl.wikibooks.org/wiki/Kody_%C5%BAr%C3%B3d%C5%82owe/Ci%C4%85g_Fibonacciego

/**
 * Funkcja ciągu Fibonacciego rekurencyjnie
 * @param n
 * @returns {*}
 */
function fibonacci(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else if (n > 1) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


/**
 * Funkcja ciągu Fibonacciego iteracyjnie
 * @param n
 * @returns {number}
 */
function fibonacci(n) {
    if (n === 0) return 0;
    else if (n === 1 || n === 2) return 1;
    else if (n > 2) {
        var a = 1;
        var b = 1;
        var c = 0;
        for (var i = 0; i < n - 2; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}



//https://kot-zrodlowy.pl/algorytmy/2017/10/14/algorytmy-rekurencja-w-JS.html

//rekurencyjnie:

function fibo( n ) {
    if(n <= 1) {
      return n;  
     } else {
      return fibo(n - 2) + fibo(n - 1);
     }
  }


  //iteracyjnie:
  function fibo( n ) {
    let first = 0;
    let second = 1;
    let temp;
    for(let i = 0; i <= n; i++) {
      if( i > 1 ) {
        temp = first + second;
        first = second;
        second = temp;
      } else {
        temp = i;
      }
    }
    return temp;
  }





































