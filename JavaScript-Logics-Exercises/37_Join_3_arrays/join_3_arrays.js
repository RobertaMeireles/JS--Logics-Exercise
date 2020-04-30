/*Read three vectors (A, B and C) with 5 elements each. Build a D vector,
this being the junction of the three other vectors. So D must have triple
of elements, that is, 15. Present the elements of vector D.*/

const arrayA = [1,2,3,4,5];
const arrayB = [6,7,8,9,10];
const arrayC = [11,12,13,14,15];
const arrayD = [];


function inserirInf(arrayRealizar) {
    for(let i=0;i<=arrayRealizar.length-1;i++){
        arrayD.push(arrayRealizar[i]);
    }
    return console.log(arrayD);    
}

inserirInf(arrayA);

inserirInf(arrayB);

inserirInf(arrayC);

