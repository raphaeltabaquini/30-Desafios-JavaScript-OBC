// Desafio #11 - Intervalo de Coordenadas

/*
    O capitão da sua nave precisa que você implemente no sistema principal uma forma de obter todas as coordenadas abaixo de um 
    determinado ponto partindo da origem (0, 0) e retorne isso para o sistema em uma lista ordenada crescente. As coordenadas são 
    escritas na forma de pares ordenados (x, y).
    
    DESAFIO: Escreva uma função que receba um par ordenado (x, y) e retorne um array de pares (x, y) onde cada um deles possui x e y 
    menor ou igual ao par recebido em ordem crescente. Os pares devem ser ordenados de forma que primeiro aumente o valor de y e 
    depois o valor de x. Apenas o quadrante onde x e y são positivos deve ser considerado.
*/

function gerarCoordenadas(coordFinal) {
    let coords = [];

    for (let a = 0; a <= coordFinal[0]; a++) {
        for (let b = 0; b <= coordFinal[1]; b++) {
            coords.push([a, b]);
        };
    };

    console.log(coords);
};

gerarCoordenadas([2, 2]);