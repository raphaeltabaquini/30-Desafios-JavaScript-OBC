// DESAFIO #3 - Linguagem Limitada

/*
    Um dispositivo portátil encontrado no planeta Anelius está sendo estudado pela equipe de pesquisadores do Instituto de 
    Tecnologia da Federação. Ele funciona a base de uma linguagem desconhecida e limitada. Para estender suas funcionalidades, 
    foi solicitado que você crie um procedimento que seja capaz de inverter listas de forma não destrutiva, ou seja, sem alterar 
    a lista original, porém utilizando apenas recursos básicos de repetição (for, while, etc).

    DESAFIO: Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas do original sem 
    alterá-lo. Não utilize os métodos do objeto global Array do javascript (reverse, map, forEach, etc).
*/

function alterarOrdem(lista) {
    const newArray = [];

    for (let index = 0; index < lista.length; index++) {
        newArray[index] = lista[lista.length - 1 - index];
    };

    console.log(newArray);
};

alterarOrdem([0, true, 2, '3']);
