// DESAFIO #1 - AJUDANDO A ACADEMIA

/* 
    A Academia de Oficiais da Federação precisa da sua ajuda para criar um programa que automatize os cálculos das médias 
    de alunos e turmas para melhor acompanhar os seus desempenhos. Este programa será incorporado em seu sistema principal, 
    portanto você precisa apenas desenvolver a função que calcula a média. No entanto, a função deve ser capaz de funcionar 
    com qualquer número de alunos ou turmas. 
*/

function calcularNotas(...notas) {
    console.log(notas.reduce((a, b) => a + b, 0) / notas.length)
};

calcularNotas(10, 9, 6, 8, 9, 1, 5, 7);