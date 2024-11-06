// Desafio #12 - Espaçoporto Comercial

/*
    A sua nave está de passagem por um planeta que usa como dinheiro as moedas de créditos. Existem moedas de 1, 5, 10, 25, 100 e 500 
    créditos. Para conseguir um favor de um comerciante local você irá ajudá-lo a automatizar o processo de contagem das moedas 
    através de um programa que calcula quantas de cada moeda ele irá precisar para chegar a um valor determinado.
    
    DESAFIO: Escreva uma função que receba um valor inteiro e retorne a quantidade de cada moeda para se chegar ao valor. Deve-se 
    sempre priorizar as moedas de maior valor (o máximo possível de moedas de 500, depois o máximo possível de moedas de 100, etc).
*/

function contarMoedas(valor) {
    const moedas = {'500': 0, '100': 0, '25': 0, "10": 0, "5": 0, "1": 0};

    let valorAtual = valor;

    moedas['500'] = Math.floor(valorAtual / 500);
    valorAtual -= 500 * Math.floor(valorAtual / 500);

    moedas['100'] = Math.floor(valorAtual / 100);
    valorAtual -= 100 * Math.floor(valorAtual / 100);

    moedas['25'] = Math.floor(valorAtual / 25);
    valorAtual -= 25 * Math.floor(valorAtual / 25);

    moedas['10'] = Math.floor(valorAtual / 10);
    valorAtual -= 10 * Math.floor(valorAtual / 10);

    moedas['5'] = Math.floor(valorAtual / 5);
    valorAtual -= 5 * Math.floor(valorAtual / 5);

    moedas['1'] = Math.floor(valorAtual / 1);
    valorAtual -= 1 * Math.floor(valorAtual / 1);

    console.log(moedas);
};

contarMoedas(525);