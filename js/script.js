// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



/*  - chiedere all'utente l'età
    - chiedere all'utente i km che vuole percorrere

    - calcolare il totale del biglietto x km
    - calcolare il totale del biglietto x km - 20%
    - calcolare il totale del biglietto xkm - 40%

    ? SE utente minore di 18 anni 
        ° il tuo biglietto costa € tot
    : ALTRIMENTI SE utente maggiore di 65 anni
        ° il tuo biglietto costa € tot
    : ALTRIMENTI 
        ° il tuo biglietto costa tot.

*/

// età e km da percorrere

let userAge = parseInt(prompt("Quanti anni hai?"));

let totalKm = parseInt(prompt("Quanti km vuoi percorrere?"));

// calcolo km * prezzo totale

let totalPrice = totalKm * 0.21; 

// calcolo sconti

let minorsPrice = totalPrice - ((20/100) * totalPrice);

let eldersPrice = totalPrice - ((40/100) * totalPrice);

// calcolo finale

if(userAge < 18){

    document.writeln("Il costo del tuo biglietto è di " + minorsPrice.toFixed(2) + " €");

} else if(userAge >= 65){

    document.writeln("Il costo del tuo biglietto è di " + eldersPrice.toFixed(2) + " €");

} else {

    document.writeln("Il costo del tuo biglietto è di " + totalPrice.toFixed(2) + " €");

}













