// DESAFIO #4 - Cálculos de Viagens Espaciais I

/*
    A equipe encarregada de aperfeiçoar o sistema de navegação das naves da Federação precisa que você os ajude criando uma nova 
    funcionalidade. Essa funcionalidade consiste em calcular a elevação quadrática individual de um determinado número. 
    Para realizar esse cálculo você deve elevar ao quadrado cada algarismo do número em questão e concatenar os resultados em um 
    único número.
    
    DESAFIO: Escreva uma função que recebe um número inteiro qualquer, eleve ao quadrado cada um de seus algarismos e depois 
    concatene o resultado retornando um único número inteiro.
*/

function elevarQuadrado(numbers) {
    let newNumbers = [];
    const numbersString = numbers.toString();

    for (let i = 0; i < numbersString.length; i++) {
        newNumbers.push(numbersString[i] * numbersString[i]);
    };

    return Number(newNumbers.join(''));
};

console.log(elevarQuadrado(882));