let word = "hello";


const reverse = (array) => {
    let auxiliar="";
    for(let i =array.length-1; i>=0;i--){

        auxiliar = auxiliar + array[i]; 
        
    }
    return auxiliar;
}

console.log(reverse(word));


let email=["a","b","c"];

/*
for(let i = 0; i<email.length;i++){
    console.log(email[i]);
}
*/

for(let i = 0; i<email.length;i++){
    console.log(email[i]);
}
console.log(valor)