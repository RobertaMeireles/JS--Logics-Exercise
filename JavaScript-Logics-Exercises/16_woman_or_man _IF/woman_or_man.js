/*Read a person's name and gender, presenting as
output one of the following messages: “Exmo.Sr.” for informed sex
as masculine, or the message “Exma.Sra.”, for the informed sex
as feminine. Also present under the printed message the
Persons name.
 */

 let nome = "Roberta";
 let sexo = "ee";

 if (sexo=="Feminino"){
     console.log(`Senhora ${nome}`)
 }else if (sexo=="Masculino"){
    console.log(`Senhor ${nome}`)
 }else{
    console.log(`verifique a variavel sexo`)
 }