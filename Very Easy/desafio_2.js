// DESAFIO #2 - Procedimento Recursivo I

/*
    A equipe de manutenção da nave Highwind solicitou a sua ajuda para analisar o desempenho do computador portátil utilizado 
    pela equipe de reconhecimento. Para isso, em um determinado momento, você precisou simular a criação de blocos de informação 
    em formato de texto recursivamente, então decidiu criar uma função para imitar esse comportamento.

    DESAFIO: Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço "-"
    sem utilizar nenhuma estrutura de repetição (while, dowhile, for, etc).
*/

function criarChunck(quantidade) {
    switch (quantidade) {
        case 0:
            return '';
        case 1:
            return 'chunck';
        default:
            return 'chunck-' + criarChunck(quantidade - 1)
    }
};

console.log(criarChunck(2));