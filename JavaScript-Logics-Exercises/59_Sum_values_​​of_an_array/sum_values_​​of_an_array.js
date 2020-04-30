let ar= [1, 2, 3];

function simpleArraySum(ar) {
    let aux = 0;
    for(let i=0; i<ar.length;i++){
        aux=ar[i]+aux;
    }
    return console.log(aux);
}

simpleArraySum(ar);

