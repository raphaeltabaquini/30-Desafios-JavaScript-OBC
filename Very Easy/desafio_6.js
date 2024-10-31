// DESAFIO #6 - História Escondida II

/*
    Ainda analisando as tabuletas do planeta Ondur, dessa vez o pesquisador encontrou um padrão diferente nos escritos. Ele agora 
    precisa que você atualize o programa para ser capaz de ler esse novo padrão. Para isso, o programa precisa ser capaz de 
    inverter as palavras dos trechos dos escritos, porém sem alterar a ordem em que elas estão escritas.

    DESAFIO: Escreva uma função que recebe uma string e retorna cada palavra da string invertida e em letras minúsculas, porém 
    com as palavras na mesma ordem. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas 
    letras e espaços.
*/

function inverterPalavras(frase) {
    const fraseArray = frase.split(' ');
    const newFrase = [];

    fraseArray.forEach(element => {
        newFrase.push(element.toLowerCase().split("").reverse().join(''))
    });

    console.log(newFrase.join(" "));
};

inverterPalavras('This is an apple');