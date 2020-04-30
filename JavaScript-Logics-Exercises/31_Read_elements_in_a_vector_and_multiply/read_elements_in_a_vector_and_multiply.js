/*Read the 8 elements of a vector A. Build a Vector B of the same
dimension with the elements of vector A multiplied by 3. The element
B [1] must be involved by element A [1] * 3, element B [2] involved
by element A [2] * 3 and so on up to 8. Display vector B.*/

const arrayA = [1, 1, 1, 1, 1, 1, 1, 1];

console.log("metodo MAP****************************");

let arrayB = arrayA.map( function (valor) { //valor é o parametro que vai ser passado para a função map, que quer dizer cada valor do array
    return valor*3;
})

console.log(arrayB);

console.log("metodo ANTIGO****************************");

let auxiliar;
const arrayD=[];

for(i=0; i<arrayA.length; i++){
    auxiliar = arrayA[i]*3;
    arrayD.push(auxiliar);
}

console.log(arrayD);