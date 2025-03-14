function verificarNumeroPrimoC(n){
    if(n <= 1){
        return false;
    }

    if(n % 2 == 0 && n!=2){
        return false;
    }

    for(let i = 3; i < n; i+=2){
        if(n % i == 0){
            return false;
        }
    }

    return true;

}


console.log(`verificarNumeroPrimoC(0)= ${verificarNumeroPrimoC(0)}`); //false
console.log(`verificarNumeroPrimoC(1)=${verificarNumeroPrimoC(1)}`); //false
console.log(`verificarNumeroPrimoC(2)=${verificarNumeroPrimoC(2)}`); //true
console.log(`verificarNumeroPrimoC(3)=${verificarNumeroPrimoC(3)}`); //true
console.log(`verificarNumeroPrimoC(7)=${verificarNumeroPrimoC(7)}`); //true
console.log(`verificarNumeroPrimoC(83)=${verificarNumeroPrimoC(83)}`); //true
console.log(`verificarNumeroPrimoC(100)=${verificarNumeroPrimoC(100)}`); //false
console.log(`verificarNumeroPrimoC(991)=${verificarNumeroPrimoC(991)}`); //true
console.log(`verificarNumeroPrimoC(104729)=${verificarNumeroPrimoC(104729)}`); //true
console.log(`verificarNumeroPrimoC(14348907)=${verificarNumeroPrimoC(14348907)}`); //false