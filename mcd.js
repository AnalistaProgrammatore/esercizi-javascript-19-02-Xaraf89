/**
* Scrivere qui il codice delle funzioni mcd(x, y) e mcdRecursive(x, y)
**/
/*Scrivere nel file mcd.js la funzione mcd(x, y) e mcdRecursive(x, y) che implementi l'algoritmo 
di Euclide per il calcolo del massimo comun divisore tra due numeri. Per la funzione 
mcdRecursive(x, y) descrivere lo stack di chiamate ricorsive (per lo stack potete calcolare la 
successione ad un numero minore di 30 a vostra scelta purchè nello stack compaiano almeno 4 
chiamate ricorsive)*/


/*function MCD(a , b){
if(a > b && b==0){
    var c= a-b
   } else if( a < b ){
    
   } else (a === b) ;{
    document.write("il massimo comun divisore è " + a);
  }
}
*/
    var a= 147
    var b= 126
function MCD(a , b){
        if( a > b ){
        r=1 
        while(r!=0)
        r=a%b;
        a=b;
        b=r;
        return ;
       } else if( a < b ){
        r=b%a;
        b=a;
        a=r;
        return;
       } else (a=b);{
        console.log("ci siamo gia è" + a);
      }
    }
    console.log(MCD)
