/**
* Scrivere qui il codice della funzione fibonacci(n)
**/
/*Scrivere nel file fibonacci.js la funzione ricorsiva di calcolo della serie di fibonacci 
per n = 30 https://it.wikipedia.org/wiki/Successione_di_Fibonacci e descrivere lo Stack di 
chiamate ricorsive (per lo stack potete calcolare la successione ad un numero minore di 30 
a vostra scelta purchè nello stack compaiano almeno 4 chiamate ricorsive)*/


a=0;
b=1;
result=b;
for(i=1 ; i<=10 ; i++){
document.write(result + " - ")
result=a+b;
a=b;
b=result;
}
