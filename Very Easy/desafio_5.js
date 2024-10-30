// DESAFIO #5 - História Escondida I

/*
    Durante uma missão de exploração no planeta Ondur a tropa de reconhecimento encontrou tabuletas contendo escritos de uma 
    antiga civilização, mas ao traduzir seu conteúdo as mensagens não faziam sentido. Porém, um pesquisador que estudava os 
    escritos percebeu que poderiam haver mensagens escondidas. Como os escritos eram muitos e para poder analisar melhor ele 
    solicitou que você criasse um programa que o ajudasse a encontrar a história escondida contada pelas tabuletas. Para conseguir 
    isso o programa precisar ser capaz de identificar a maior letra (segundo a ordem alfabética) de cada trecho dos escritos.
    
    DESAFIO: Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que
    a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.
*/

function identificarMaiorLetra(str) {
    const strSplit = str.toLowerCase().replace(' ', '').split('');
    const strOrdenada = strSplit.sort();

    console.log(strOrdenada.at(-1));
};

identificarMaiorLetra('Hello');