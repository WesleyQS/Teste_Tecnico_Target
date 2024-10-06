/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

// Function que retorna os valores "true" e "false"

function fibonacci(num) {
    let a = 0;
    let b = 1;
    let proximoValor;

    if(num === 0 || num === 1){
        return true;
    }

    while(b <= num){
        proximoValor = a + b;
        a = b;
        b = proximoValor;

        if(b === num){
            return true;
        }
    }
    return false;
}

// Function que vai verificar se pertence ou não a sequencia, pegando os valores "true" e "false" da function de cima

let pertence = 34;
verificaFibonacci(pertence);

function verificaFibonacci(pertence){
    if(fibonacci(pertence)){
        console.log(`${pertence} pertence a sequência de Fibonacci.`);
    }else{
        console.log(`${pertence} não pertence a sequência de Fibonacci.`);
    }
}