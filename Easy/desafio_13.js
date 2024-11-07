// Desafio #13 - Código de Identificação de Nave

/*
    As naves da Federação utilizam um código único que serve para identificá-las. Esse código é composto de 12 algarismos, sendo o 
    último um dígito verificador. Você está construindo em sua própria nave um módulo capaz de analisar um código de identificação 
    recebido e verificar se é um código válido de uma nave da Federação.
    
    DESAFIO: Escreva uma função que recebe um número e verifica se ele é um código de identificação válido segundo as regras de 
    criação do dígito verificador. A criação do dígito verificador funciona da seguinte forma:

        1. Some os dígitos das posições pares (impares se estiver contando a partir de 1);
        2. Multiplique esse resultado por 3;
        3. Some os dígitos das posições ímpares (pares se estiver contando a partir de 1) do número original e então some esse 
            resultado ao resultado do passo anterior;
        4. Encontre o resto da divisão do resultado do passo anterior por 10;
        5. Se o resto da divisão for 0, o dígito verificador é 0, do contrário o dígito verificador é 10 - resto
*/

function verificacaoNave(codigoIdentificador) {
    let indicesPares = [];
    let indicesImpares = [];
    const digitoVerificador = Number(codigoIdentificador.toString().at(-1));

    for (let index = 1; index < codigoIdentificador.toString().length; index++) {
        if (index % 2) {
            indicesPares.push(Number(codigoIdentificador.toString().substring(index - 1, index)));
        } else {
            indicesImpares.push(Number(codigoIdentificador.toString().substring(index - 1, index)));
        };
    };
    
    let somaPares = indicesPares.reduce((valor, valorAtual) => {return valor + valorAtual}) * 3;
    let somaImpares = indicesImpares.reduce((valor, valorAtual) => {return valor + valorAtual}) + somaPares;

    const verificacaoDigito = somaImpares % 10 == 0 ? 0 : 10 - somaImpares % 10;

    if (verificacaoDigito == digitoVerificador){
        return true;
    } else {
        return false;
    };
};

console.log(verificacaoNave(547020743789));
console.log(verificacaoNave(301354030348));
console.log(verificacaoNave(301354030349));
console.log(verificacaoNave(123456789872));