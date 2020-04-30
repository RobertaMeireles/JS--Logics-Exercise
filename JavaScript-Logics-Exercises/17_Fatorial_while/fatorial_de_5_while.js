/*Do the factorial of 5! */




let fatorial = 1;                
let contador = 5;                

while (contador>0) {             
    fatorial=fatorial*contador;
    contador--;                 

    /*onde:
        fatorial=fatorial* contador;
    5   fatorial= 1      *  5       = 5
    4   fatorial= 5      *  4       =20
    3   fatorial= 20     *  3       =60
    2   fatoria=  60     *  2       =120
    1   fatoria=  120    *  1       =120 resposta */
}

console.log(`5 ! = 5x4x3x2x1 = ${fatorial}`)

/****************************************************************************** */


/*
let fatorial = 1;             
let contador = 1;            

while (contador<=5) {          
    fatorial=fatorial*contador;
    contador++;                

    /*onde:
        fatorial=fatorial* contador;
    1   fatorial= 1      *  1       = 1
    2   fatorial= 1      *  2       = 2
    3   fatorial= 2      *  3       = 6
    4   fatoria=  6      *  4       = 24
    5   fatoria=  24     *  5       = 120 resposta 

}

console.log(`5 ! = 5x4x3x2x1 = ${fatorial}`)*/