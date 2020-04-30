let num1 = 0;
let num2 = 1;

for(i=0; i<=15; i++){
    num1 = num1 /*0*/ + num2 /*1*/;        //0 + 1 = 1
    num2 = num2 /*1*/ + num1 /*1*/;        //1+ 1 = 2
    console.log(num1,num2);
}

/*
const fibonacci = () => {
    let numA = 1;
    let numB = 0;
    let num = 1;

    for (let i = 1; i <= 15; i++) {

        console.log(num);
        num = numA + numB;
        numB = numA;
        numA = num
        
    }
};

fibonacci(); */


