/**
* Scrivere qui il codice dell'esercizio 1 del capitolo 4 di eloquentJS
**/
var range = function(start, end){
    var array=[];
    counter=start;
    while(counter<end){
        array.push(counter);
        counter++;
    }
    return array
}
var somma = function(array){
    var totale=0;
    while(array.lenght>0){
        totale=totale+array.pop();
    }
    return totale
}
console.log(somma(range(1, 10)))

/*oppure*/ 

var somma2 = function(array){
    var totale=0;
    for(i=0; i<array.lenght ; i++){
        totale = totale + array[i];
    }
    return totale
}
console.log(somma2(range(1, 10)))
