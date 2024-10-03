let Nome = prompt("Digite o nome da pessoa:")
let Idade = prompt("Digite a idade da pessoa:")
let Endereco = prompt("Digite o endereço:")

let pessoa = {}

pessoa.nome = Nome
pessoa.idade = Idade
pessoa.endereco = Endereco
    
console.log(pessoa)

let Atualizar = prompt("Para atualizar algum dado precione: \n 1- Para atualizar os dados\n 2- Para manter os dados")

if(Atualizar == 1){

    let Nome = prompt("Digite o nome da pessoa:")
    let Idade = prompt("Digite a idade da pessoa:")
    let Endereco = prompt("Digite o endereço:")

    pessoa.nome = Nome
    pessoa.idade = Idade
    pessoa.endereco = Endereco
    
    console.log(pessoa)

}else{
    alert("Confira os dados")
}