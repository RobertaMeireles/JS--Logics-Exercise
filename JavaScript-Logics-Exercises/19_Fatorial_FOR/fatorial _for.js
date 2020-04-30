/*Calculation of the factorial of 5 using the FOR cycle */


/*
let fatoraçao = 1;               

for(let i = 1;  i<=5;   i++){
        fatoraçao=fatoraçao*i; 
    }

    /*onde:
        fatoraçao=fatorial* i;
    1   fatoraçao= 1       *  1        = 1
    2   fatoraçao= 1       *  2        = 2
    3   fatoraçao= 2       *  3        = 6
    4   fatoraçao=  6      *  4       = 24
    5   fatoraçao=  24     *  5       = 120 resposta 



console.log(fatoraçao);
*/

/****************************************************************************** */

//diminuindo o contador i: recomendado para esse exercicio
/*
let fatoraçao = 1;                   

for(let i=5;  i>0;   i--){              
    fatoraçao=fatoraçao*i; 
    }

    /*onde:
        fatoraçao=fatoraçao* i;
    5   fatoraçao= 1       *  5       = 5
    4   fatoraçao= 5       *  4       =20
    3   fatoraçao= 20      *  3       =60
    2   fatoraçao=  60     *  2       =120
    1   fatoraçao=  120    *  1       =120 resposta 

console.log(fatoraçao);*/

/****************************************************************************** */


let fatorial = 1;    

let fatorialFuncao = (contador) =>{                
    let fatorial = 1;                              
    for(let i = 1; i<=contador; i++){
        fatorial=fatorial*i; 
    }
}

console.log(fatorialFuncao(5));








