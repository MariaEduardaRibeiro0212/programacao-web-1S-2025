console.log(`Olá, mundo!`);

let pessoa = {
    nome: "Maria",
    telefone: 61981323162,
    endereco: "Brasília - DF"
};

console.log(pessoa);

function alterarNomeSeForMaria(pessoa){
    if(pessoa.nome == "Maria"){
        pessoa.nome = "Eduarda";
    }
}

alterarNomeSeForMaria(pessoa);
console.log(pessoa);