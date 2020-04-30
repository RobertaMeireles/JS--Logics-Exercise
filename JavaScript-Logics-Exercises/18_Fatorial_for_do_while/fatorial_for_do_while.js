let fatorial = 1;
let contador = 1;

do {
    fatorial=fatorial*contador; 
    contador ++;
} while (contador<=5);

console.log(`5 ! = 5x4x3x2x1 = ${fatorial}`)