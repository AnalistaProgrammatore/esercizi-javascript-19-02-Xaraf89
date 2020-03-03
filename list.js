/**
* Scrivere qui il codice dell'esercizio 3 del capitolo 4 di eloquentJS
**/
var ripeti , numeri = [];
while(ripeti !== "n"){
    numeri.push(prompt("aggiungi il numero all'array"));
    ripeti = prompt('vuoi continuare a scrivere numeri y/n');
    console.log(numeri + " <br />");
}
