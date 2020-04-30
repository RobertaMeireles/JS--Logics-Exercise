/*Read the 8 elements of a Vector A. Build a Vector B with the same dimension
and with the elements of Vector A multiplied by 5. Include a search routine
binary that searches for any element in vector B, at the user's request.
*/

const vetor = [1,2,3,4,5,6,7,8];
let arrayB = [];



const binSeach = (vetor, left, right, valor) =>{
    if(right >= left){
        const indice = parseInt(left + (right-left)/2)
        if(vetor[indice]===valor){
            return valor;
        }
        if(vetor[indice]>valor){
            return binSeach(vetor,left,indice-1,valor)
        }
        return binSeach(vetor, indice+1, right, valor)
    }  
    return -1; 
}

console.log(binSeach(vetor,0,vetor.length-1,20)); 
console.log(binSeach(vetor,0,vetor.length-1,8));
