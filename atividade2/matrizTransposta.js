let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
]

function imprimirMatrizOriginal(matriz){
    for(let i = 0; i < matriz.length; i++){
        let linhaMatriz = "";
        for(let j = 0; j < matriz[i].length; j++){
            linhaMatriz+= matriz[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }
}

function imprimirMatrizTransposta(matriz){
    for(let j = 0; j < matriz[j].length; j++){
        let linhaMatriz = "";
        for(let i = 0; i < matriz.length; i++){
            linhaMatriz+= matriz[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }
}

console.log("Imprimindo a matriz original: ");
imprimirMatrizOriginal(matriz);

console.log("Imprimindo a matriz transposta: ");
imprimirMatrizTransposta(matriz);

