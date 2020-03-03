/**
* Scrivere qui il codice dell'esercizio 2 del capitolo 4 di eloquentJS
* Vi ricordo che le funzioni DEVONO ESSERE PURE e implementate una in modo IMPERATIVO e una in modo DICHIARATIVO
**/
//quando vuoi semplicemente invertire solo un array

let array=[1,2,3,4,5,6,7,8,9]
let reverseArray = array.reverse();
console.log(reverseArray(array))

//quando vuoi avere 2 diversi array uno l'inverso dell'altro

let array2 =[...array].reverse();
console.log("array2")
console.log("array")

//terzo metodo se non vogliamo toccare l'array --metodo con reduce

var reducedArray = arr.reduce(function(accumulatore, oggetto){
                      accumulatore.unshift(oggetto)
                      return accumulatore
                    },[])

console.log('reduced array')
console.log(reducedArray)
console.log('original array')
console.log(arr)
