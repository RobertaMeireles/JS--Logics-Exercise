/*Ler os 30 elementos de um Vector A. Construír um  Vector B do mesmo tipo, 
observando a seguinte lei de formação: 

ITEM 1: “Todo o elemento de B deve ser o cubo 
do elemento de A correspondente”. 

ITEM 2: Incluír uma rotina de pesquisa sequencial, 
para pesquisar um valor a ser determinado pelo utilizador, de entre os 
elementos do Vector B.  */

const arrayA = [3,5,11,2,33,7,40,12,22,24,39,5,11,2,33,7,40,12,22,24,39,5,11,2,33,7,40,12,22,24];
let arrayB = [];


const criarArrayCubo = (array) =>{

    let novoArray=[];
    for(i=0;i<array.length;i++){
        novoArray[i]=1;
        for(j=0;j<3;j++){
            novoArray[i] = novoArray[i]*array[i];
        }
    }
    return novoArray;
}

arrayB = criarArrayCubo(arrayA);
console.log(arrayB); 



  function linearSearch(array, toFind){
    for(let i = 0; i < array.length; i++){
      if(array[i] === toFind) 
      return i;
    }
    return -1;
  }

  console.log(linearSearch(arrayB,27)); 
 