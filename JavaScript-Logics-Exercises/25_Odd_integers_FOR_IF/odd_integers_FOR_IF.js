/*Display all odd integer values ​​in the range 0 to 20.
To check if the number is odd, carry out the logical verification of this number within the mesh.
condition with the instruction 'if', asking if the number
it is odd; if so, show it; if not, proceed to the next step. */
let newArray = [];
for (i=0; i<=20; i++){
    if( (i % 3)==0 ){
        console.log(i); // caso queira apenas mostrar os valores
        newArray.push(i) //caso queira colocar os valores em um array
    } 
}

console.log(newArray);