/*Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, 
awarding points on a scale from  to  for three categories: problem clarity, originality, and 
difficulty.

We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge 
to be the triplet .

Your task is to find their comparison points by comparing  with ,  with , and  with .

If , then Alice is awarded  point.
If , then Bob is awarded  point.
If , then neither person receives a point.
Comparison points is the total points a person earned.

Given  and , determine their respective comparison points.

For example,  and . For elements , Bob is awarded a point because . For the equal elements  and , 
no points are earned. Finally, for elements ,  so Alice receives a point. Your return array would 
be  with Alice's score first and Bob's second. */

let arrayAlice = [1,2,3];
let arrayBoby = [3,2,1];

const compareTriplets=(a,b)=>{
    let boby = 0;
    let alice = 0;
    let pontos = [];
    for(let i=0;i<=a.length;i++){

        if (a[i]>b[i]){
            alice += 1
        }else if(a[i]<b[i]){
            boby += 1;
        }
    }
    pontos.push(alice);
    pontos.push(boby);

    return (pontos);
}

console.log(compareTriplets(arrayAlice,arrayBoby));



