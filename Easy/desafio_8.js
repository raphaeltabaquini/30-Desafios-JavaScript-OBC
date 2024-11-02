// Desafio #8 - Biblioteca Interplanetária

/*
    A Biblioteca Interplanetária acumula conhecimento de todas as partes da galáxia, possuindo um acervo gigantesco e muito rico. 
    Todas as publicações são organizadas por autor e para isso o último nome do autor é utilizado para identificação. A direção da 
    biblioteca precisa que você crie um programa para converter o nome completo de um autor para um nome abreviado corretamente no 
    formato utilizado na organização das publicações.

    DESAFIO: Escreva uma função que recebe uma string contendo um nome completo e retorna uma string com todos os nomes, exceto o 
    último, abreviados e o último nome em letras maiúsculas antes das abreviações separado por vírgula.
*/

function converterNome(nome) {
    const arrayNome = nome.toUpperCase().split(" ");
    let newNome = '';

    arrayNome.filter(a => a !== arrayNome.at(-1)).forEach(element => {
        newNome += ` ${element[0]}.`;
    });

    console.log(`${arrayNome.at(-1)},${newNome}`);
};

converterNome("Louisa May Alcott");