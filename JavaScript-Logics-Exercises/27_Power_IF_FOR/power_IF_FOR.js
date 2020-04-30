/*Present the powers of 3, ranging from 0 to 15. It must be considered that
any number raised to zero is 1, and raised to 1 is itself. Must be
the result, observing the following definition:*/


let elevado = 1;
let base = 4;


    for (i=0; i<=150;i++){
        if(i==0){
            fatorial = 1;
            console.log(`${base}^${i} = ${elevado}`)
        }else{
            elevado = base*elevado;
            console.log(`${base}^${i} = ${elevado}`)

            /*where:
               elevado = base*elevado;
             1 elevado = 3 * 1 = 3
             2 elevado = 3 * 3 = 9
             
             */
        }
    }

