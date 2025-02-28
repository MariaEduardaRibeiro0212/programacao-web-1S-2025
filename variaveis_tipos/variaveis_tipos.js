console.log("Hello world");
const n = 1; //variável constante não permite alterar o valor da variável

console.log('n = ' + n);

var j = 3;
j = 4;

let l = 3; //o let não permite redeclarar uma variável
l = 4;

console.log('j = ' + j);

let nome = "Maria Eduarda";
let telefone = '1234;'

let x = 3.14;
x = 0.5;
x = 1;

let b = false; //true ou falso sempre minúsculo no js
b = true;

let c = 0; //será avaliado como verdadeiro

let conexao = null;
//let conexao; //ausência de definição




console.log("Meu nome é " + nome + ". Telefone: " + telefone);
console.log(`Meu nome é ${nome}. Telefone: ${telefone}`); //outra forma -> template string
console.log(`Valor de X é  ${x}`);
console.log(`${x} + ${x} = ${x + x}`);

