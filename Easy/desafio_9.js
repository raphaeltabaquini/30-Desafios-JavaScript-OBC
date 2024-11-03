// DESAFIO #9 - Instruções de Emergência

/*
    As estações e naves de maior porte da Frota Estelar em situações de emergência precisam enviar instruções de navegação 
    importantes e que não podem ser comprometidas. Para isso, algumas validações precisam ser feitas nos códigos de transmissão. 
    Uma dessas validações envolve um código que deve possuir a mesma quantidade de cada caractere que o compõe. Foi solicitado a 
    você que crie a função que validará este código.
    
    DESAFIO: Escreva uma função que recebe uma string, verifica se ela possui a mesma quantidade de cada letra que a compõe e 
    retorna true caso possua ou false caso não possua.
*/

function verificarDuplicidade(str) {
    let letras = {};

    for (let index = 0; index < str.length; index++) {
        letras[str[index]] = letras[str[index]] ? letras[str[index]] + 1 : 1
    }

    return Object.values(letras).every((element, index, array) => index !== 0 ? element === array[index - 1] : true);
};

console.log(verificarDuplicidade("This is Thee"));