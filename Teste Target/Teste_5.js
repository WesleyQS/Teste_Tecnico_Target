/* 

5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU

*/

function inverterString(str){
    let stringInvertida = '';
    let i;

    // Aqui coloquei um laço para ir andando pela string de tras para frente
    for(i = str.length - 1; i >= 0; i--){
        stringInvertida += str[i];
    }
    return stringInvertida;
}


let stringOriginal = "Serei Targetiano";
let stringInvertida = inverterString(stringOriginal);

console.log("Original: ", stringOriginal);
console.log("Invertida: ", stringInvertida);