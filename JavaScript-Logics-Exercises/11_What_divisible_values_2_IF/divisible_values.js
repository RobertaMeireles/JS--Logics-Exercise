/*
Read four whole numbers and display the numbers
that are divisible by 2 or 3.*/

let numbers = [10, 25, 80, 60];
let newArray = [];

const divisao = () =>{
    for(let i=0; i<numbers.length;i++){
        if( ( (numbers[i]%2)==0) || ( (numbers[i]%3)==0 )  ){
            newArray.push(numbers[i])
        }
    }
    return newArray;
}

console.log(divisao());
