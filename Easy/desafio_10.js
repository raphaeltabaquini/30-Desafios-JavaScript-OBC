// Desafio #10 - Procedimento Recursivo II

/*
    Mais uma vez a equipe de manutenção solicitou a sua ajuda para analisar o desempenho dos computadores portáteis da equipe de 
    reconhecimento. Dessa vez, no entanto, o procedimento que você ficou encarregado de testar envolve cálculos matemáticos, e você 
    irá utilizar o cálculo do fatorial de um determinado número para isso. Portanto, será preciso criar um procedimento que seja 
    capaz de calcular o fatorial de qualquer número inteiro positivo sem utilizar estruturas de repetição.
    
    DESAFIO: Escreva uma função que recebe um número e retorna o seu fatorial sem utilizar nenhuma estrutura de repetição (while, 
    dowhile, for, etc). O fatorial de um número é igual a multiplicação de todos os inteiros positivos menores ou iguais a ele. Ela 
    deve ser capaz de retornar números inteiros corretos mesmo para valores altos.
*/

function gerarFatorial(num) {
    switch (num) {
        case 0:
            return 1;
        default:
            return BigInt(num) * BigInt(gerarFatorial(num - 1));
    };
};

console.log(gerarFatorial(9));