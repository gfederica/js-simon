// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




// FUNZIONI
// mi serve una funzione che genera i numeri casuali
// + una funzione isInArray (duplicati = numeri ricordati)
function duplicato (elemento, array) {
    // entro nel ciclo, se trovo il duplicato si ferma e il valore è duplicato=true. Di base è false;
    for (var i = 0; i < array.length; i++) {
        if (elemento == array[i]) {
            return true;
        } 
    }
    return false;
}


function numeroRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// fine FUNZIONI


// parto con un array vuoto dove salvo i 5 numeri casuali
var numeriRandom = [];
var numeriUtente = [];

while (numeriRandom.length < 5) {
    var numero = numeroRandom(1, 100);
    // pusho il numero random generato solo se il numero non è un duplicato, pushando dò l'incremento al ciclo
    if (duplicato(numero, numeriRandom) == false ) {
        numeriRandom.push(numero);
    }
}
console.log(numeriRandom);


alert("Simon Says: " + numeriRandom);

// poi dopo l'alert parte una timing function, un timer di 30 secondi (setTimeout)

var timeout = setTimeout (function () {
    var numeroUtente;
    // dentro la funzione asincrona inseriremo il prompt dei numeri
    // lo inseriamo dentro un for poichè i tentativi sono 5
    for (i = 0; i < 5; i++) {
        do { numeroUtente = parseInt(prompt("Inserisci il numero che ha scelto Simon!")); } 
        while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 100);
    // se il numero isinarray lo pushiamo ad un altro array copia
    // se il numero è un doppione diamo un alert
        if (duplicato (numeroUtente, numeriUtente)) {
            alert("Hai inserito un numero già digitato! Hai perso un tentativo.");
        } else if (duplicato(numeroUtente, numeriRandom)) {
            numeriUtente.push(numeroUtente);
        }
    }
    alert("Hai indovinato " + numeriUtente.length + " numero/i su 5!\nI numeri di Simon erano " + numeriRandom + "\nI numeri che hai inserito erano: " + numeriUtente + "\nRicarica la pagina per giocare di nuovo!");
    
}, 30000);






// dopo 5 tentativi potremmo confrontare la length dei due array, stampiamo "array2" 
