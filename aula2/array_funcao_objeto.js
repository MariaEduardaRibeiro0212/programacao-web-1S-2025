let num_A = 2.47;
let num_B = 3.14;
let num_C;

/*
const operacoes = [1, 11, "111", 1111, null, null]; //Esse tipo de declaração é válida no JavaScript
operacoes[2];*/

const operacoes = ["adição", "subtração", "multiplicação", "divisão"];

function imprimirResultado(operando1, operando2, resultado, operacao){
    console.log(`O resultado da ${operacao} entre ${operando1} e ${operando2} é ${resultado}`);
}

//Adição

num_C = num_A + num_B;
//imprimirResultado(num_A, num_B, num_C, operacoes[0]);

//Subtração
num_C = num_A - num_B;
//imprimirResultado(num_A, num_B, num_C, operacoes[1]);

//Multiplicação
num_C = num_A * num_B;
//imprimirResultado(num_A, num_B, num_C, operacoes[2]);

//Divisão
num_C = num_A / num_B;
//imprimirResultado(num_A, num_B, num_C, operacoes[3]);

/*//Matriz
    1 2 3
    4 5 6
    7 8 9
*/

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function imprimirMatriz(A){
    for(let i = 0; i < A.length; i++){
        let linhaMatriz = "";
        for(let j = 0; j < A[i].length; j++){
            linhaMatriz+= A[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }
}

//imprimirMatriz(matriz);

//Declarando um objeto:
let capitais = {
    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21,

};

for (const key in capitais) {
    //console.log(key + " - " + capitais[key]);
}

function verificarNumeroPar(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}
    
console.log(verificarNumeroPar(3));
console.log(verificarNumeroPar(6));
