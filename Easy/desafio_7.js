// Desafio #7 - Organizando Resultados

/*
    O sistema interno da nave realiza periodicamente uma verificação de seus principais componentes para checar sua integridade. 
    Os vários resultados dessa verificação são emitidos em formato de listas de referências numéricas desorganizadas. Para otimizar 
    isso você deve criar um procedimento que seja capaz de organizar todas as listas de números em uma única lista ordenada.

    DESAFIO: Escreva uma função que recebe um array bidimensional de inteiros e retorna um único array contendo todos os números 
    em ordem ascendente.
*/

function ordenarArray(arr) {
    let newArray = [];

    arr.forEach(element => {
        newArray.push(...element);
    });

    console.log(newArray.sort((a, b) => a - b));
};

ordenarArray([[1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]]);